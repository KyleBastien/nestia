/**
 * @packageDocumentation
 * @module api.functional.consumers.sales.entire
 */
//================================================================
import { AesPkcs5 } from "./../../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../../__internal/Fetcher";
import { Primitive } from "./../../../../Primitive";
import type { IConnection } from "./../../../../IConnection";

import type { IPage } from "./../../../../structures/common/IPage";
import type { ISaleEntireArtcle } from "./../../../../structures/sales/articles/ISaleEntireArticle";


/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller ConsumerSaleEntireArticlesController.index()
 * @path GET /consumers/:section/sales/:saleId/entire
 */
export function index
    (
        connection: IConnection,
        section: string,
        saleId: number,
        input: Primitive<index.Query>
    ): Promise<index.Output>
{
    return Fetcher.fetch
    (
        connection,
        index.CONFIG,
        index.METHOD,
        index.path(section, saleId, input)
    );
}
export namespace index
{
    export type Query = Primitive<IPage.IRequest<string>>;
    export type Output = Primitive<IPage<ISaleEntireArtcle.ISummary>>;


    export const METHOD = "GET" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/entire";
    export const CONFIG = {
        input_encrypted: false,
        output_encrypted: true,
    };

    export function path(section: string, saleId: number, input: IPage.IRequest<string>): string
    {
        return `/consumers/${section}/sales/${saleId}/entire?${new URLSearchParams(input as any).toString()}`;
    }
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller ConsumerSaleEntireArticlesController.at()
 * @path GET /consumers/:section/sales/:saleId/entire/:id
 */
export function at
    (
        connection: IConnection,
        section: string,
        saleId: number,
        id: number
    ): Promise<at.Output>
{
    return Fetcher.fetch
    (
        connection,
        at.CONFIG,
        at.METHOD,
        at.path(section, saleId, id)
    );
}
export namespace at
{
    export type Output = Primitive<ISaleEntireArtcle>;


    export const METHOD = "GET" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/entire/:id";
    export const CONFIG = {
        input_encrypted: false,
        output_encrypted: true,
    };

    export function path(section: string, saleId: number, id: number): string
    {
        return `/consumers/${section}/sales/${saleId}/entire/${id}`;
    }
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;
