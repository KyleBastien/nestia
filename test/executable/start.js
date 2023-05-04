const cp = require("child_process");
const fs = require("fs");

const library = (name) => `${__dirname}/../../packages/${name}`;
const feature = (name) => `${__dirname}/../features/${name}`;

const build = async (name) => {
    process.chdir(library(name));

    process.stdout.write(`  - @nestia/${name}`);
    cp.execSync("npm install", { stdio: "ignore" });
    cp.execSync("npm run build", { stdio: "ignore" });

    const pack = JSON.parse(
        await fs.promises.readFile("package.json", "utf8"),
    );
    if (pack.scripts.test !== undefined)
        cp.execSync("npm run test", { stdio: "ignore" });
};

const execute = (name) => {
    // MOVE TO THE DIRECTORY
    process.chdir(feature(name));
    process.stdout.write(`  - ${name}`);

    // COMPILE
    const compile = () => cp.execSync("npx tsc");
    if (name.includes("error")) {
        try {
            TestValidator.error("compile error")(compile);
            throw new Error("compile error must be occured.");
        }
        catch {
            return;
        }
    }

    // GENERATE SWAGGER & SDK & E2E
    const configured = fs.existsSync(
        `${feature(name)}/nestia.config.ts`,
    );
    const input = configured
        ? null
        : fs.existsSync("src/controllers")
            ? "src/controllers"
            : "src/**/*.controller.ts";

    const generate = (type) => {
        const argv = input !== null
            ? type === "swagger"
                ? `${type} ${input} --out swagger.json`
                : `${type} ${input} --out src/api`
            : type;
        const command = `node ${library("sdk")}/lib/executable/sdk`;
        cp.execSync(`${command} ${argv}`, { stdio: "ignore" });
    };

    for (const file of [
        "swagger.json", 
        "src/api/functional", 
        "src/api/HttpError.ts",
        "src/api/IConnection.ts",
        "src/api/index.ts",
        "src/api/module.ts",
        "src/api/Primitive.ts",
        "src/test/features/api/automated"
    ])
        cp.execSync(`npx rimraf ${file}`, { stdio: "ignore" });

    if (name.includes("distribute"))
        cp.execSync(`npx rimraf packages/api`, { stdio: "inherit" });

    generate("swagger");
    generate("sdk");
    if (input === null) {
        const config = fs.readFileSync(
            `${feature(name)}/nestia.config.ts`, 
            "utf8"
        );
        if (config.includes("e2e:")) generate("e2e");
    }
    compile();

    // RUN TEST AUTOMATION PROGRAM
    if (fs.existsSync("src/test"))
        cp.execSync("npx ts-node src/test", { stdio: "ignore" });
};

const main = async () => {
    const measure = (title) => async (task) => {
        const time = Date.now();
        await task();
        const elapsed = Date.now() - time;
        console.log(`${title}: ${elapsed.toLocaleString()} ms`);
    }

    await measure("\nTotal Elapsed Time")(async () => {
        if (!process.argv.find((str) => str === "--skipBuild")) {
            console.log("Build Packages");
            for (const name of await fs.promises.readdir(library("")))
                await measure("")(() => build(name));
        }

        console.log("\nTest Features");
        const only = (() => {
            const index = process.argv.findIndex(str => str === "--only");
            return (index === -1 || process.argv.length < index + 2)
                ? null
                : process.argv[index + 1] ?? null;
        })();
        for (const name of await fs.promises.readdir(feature("")))
            if (name === (only ?? name))
                await measure("")(async () => execute(name));
    });
};

main().catch((exp) => {
    console.error(exp);
    process.exit(-1);
});
