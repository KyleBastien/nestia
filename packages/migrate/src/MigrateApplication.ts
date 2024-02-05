import typia from "typia";

import { MigrateAnalyzer } from "./analyzers/MigrateAnalyzer";
import { NEST_TEMPLATE } from "./bundles/NEST_TEMPLATE";
import { SDK_TEMPLATE } from "./bundles/SDK_TEMPLATE";
import { IMigrateProgram } from "./module";
import { MigrateApiProgrammer } from "./programmers/MigrateApiProgrammer";
import { MigrateNestProgrammer } from "./programmers/MigrateNestProgrammer";
import { IMigrateFile } from "./structures/IMigrateFile";
import { ISwagger } from "./structures/ISwagger";

export class MigrateApplication {
  public constructor(public readonly swagger: ISwagger) {
    typia.assert(swagger);
  }

  public nest(simulate: boolean): MigrateApplication.IOutput {
    const program: IMigrateProgram = MigrateAnalyzer.analyze({
      mode: "nest",
      simulate,
    })(this.swagger);
    return {
      program,
      files: [
        ...NEST_TEMPLATE,
        ...MigrateNestProgrammer.write(program),
        ...MigrateApiProgrammer.write(program),
      ],
    };
  }

  public sdk(simulate: boolean): MigrateApplication.IOutput {
    const program: IMigrateProgram = MigrateAnalyzer.analyze({
      mode: "sdk",
      simulate,
    })(this.swagger);
    return {
      program,
      files: [...SDK_TEMPLATE, ...MigrateApiProgrammer.write(program)],
    };
  }
}
export namespace MigrateApplication {
  export interface IOutput {
    program: IMigrateProgram;
    files: IMigrateFile[];
  }
}
