/**
 * @packageDocumentation
 * @module api.functional.user
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "@nestia/fetcher";
import type { IConnection } from "@nestia/fetcher";

import type { TryCatch, IFailure } from "./../../structures/exception.interface";
import type { IUser } from "./../../structures/user.interface";

/**
 * @summary 내 상세 정보 보기 API
 * @tag user
 * @returns 사용자 상세 정보
 * 
 * @controller UserController.getDetail()
 * @path GET /user
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function getDetail
    (
        connection: IConnection
    ): Promise<getDetail.Output>
{
    return Fetcher.fetch
    (
        connection,
        getDetail.ENCRYPTED,
        getDetail.METHOD,
        getDetail.path()
    );
}
export namespace getDetail
{
    export type Output = Primitive<TryCatch<IUser.Detail, IFailure.Business.Invalid | IFailure.Business.Fail>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/user";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/user`;
    }
}

/**
 * @summary 내 정보 수정 API
 * @tag user
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param body 수정할 정보를 포함합니다.
 * @returns 수정된 상세 정보
 * 
 * @controller UserController.update()
 * @path PATCH /user
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function update
    (
        connection: IConnection,
        body: Primitive<update.Input>
    ): Promise<update.Output>
{
    return Fetcher.fetch
    (
        connection,
        update.ENCRYPTED,
        update.METHOD,
        update.path(),
        body
    );
}
export namespace update
{
    export type Input = Primitive<IUser.UpdateInput>;
    export type Output = Primitive<TryCatch<IUser.Detail, IFailure.Business.Invalid | IFailure.Business.Fail | IFailure.Business.NotFound>>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/user";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/user`;
    }
}

/**
 * 사용자는 로그인을 통해 계정을 활성화할 수 있습니다.
 * 
 * 비활성화된 계정은 조회되지 않습니다.
 * 
 * @summary 내 계정 비활성화 API
 * @tag user
 * @returns true
 * 
 * @controller UserController.inActivate()
 * @path DELETE /user
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function inActivate
    (
        connection: IConnection
    ): Promise<inActivate.Output>
{
    return Fetcher.fetch
    (
        connection,
        inActivate.ENCRYPTED,
        inActivate.METHOD,
        inActivate.path()
    );
}
export namespace inActivate
{
    export type Output = Primitive<TryCatch<true, IFailure.Business.Invalid | IFailure.Business.Fail>>;

    export const METHOD = "DELETE" as const;
    export const PATH: string = "/user";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(): string
    {
        return `/user`;
    }
}