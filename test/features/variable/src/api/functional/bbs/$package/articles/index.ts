/**
 * @packageDocumentation
 * @module api.functional.bbs.$package.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsArticle } from "../../../../structures/IBbsArticle";
import type { IPage } from "../../../../structures/IPage";

/**
 * Paginate entire articles.
 *
 * @param section Section code
 * @param input Page request info
 * @returns Paginated articles with summarized info
 *
 * @controller BbsPackageArticlesController.index
 * @path PATCH /bbs/package/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  section: null | string,
  input: index.Input,
): Promise<index.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...index.METADATA,
      template: index.METADATA.path,
      path: index.path(section),
    },
    input,
  );
}
export namespace index {
  export type Input = Resolved<IPage.IRequest>;
  export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

  export const METADATA = {
    method: "PATCH",
    path: "/bbs/package/:section/articles",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: null | string) =>
    `/bbs/package/${encodeURIComponent(section ?? "null")}/articles`;
}

/**
 * Paginate entire articles (query ver.).
 *
 * @param section Section code
 * @param input Page request info
 * @returns Paginated articles with summarized info
 *
 * @controller BbsPackageArticlesController.$catch
 * @path GET /bbs/package/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $catch(
  connection: IConnection,
  section: null | string,
  input: $catch.Query,
): Promise<$catch.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...$catch.METADATA,
      template: $catch.METADATA.path,
      path: $catch.path(section, input),
    },
  );
}
export namespace $catch {
  export type Query = Resolved<IPage.IRequest>;
  export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

  export const METADATA = {
    method: "GET",
    path: "/bbs/package/:section/articles",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: null | string, input: $catch.Query) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(input as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/bbs/package/${encodeURIComponent(section ?? "null")}/articles`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
}

/**
 * Read an article.
 *
 * @param section Section code
 * @param id Target article ID
 * @returns Detailed article info
 *
 * @controller BbsPackageArticlesController.at
 * @path GET /bbs/package/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  section: string,
  id: null | (string & Format<"uuid">),
): Promise<at.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...at.METADATA,
      template: at.METADATA.path,
      path: at.path(section, id),
    },
  );
}
export namespace at {
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "GET",
    path: "/bbs/package/:section/articles/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: string, id: null | (string & Format<"uuid">)) =>
    `/bbs/package/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
}

/**
 * Get new article of a day.
 *
 * @param section Section code
 * @param date Target data
 * @returns The new article info
 *
 * @controller BbsPackageArticlesController.$new
 * @path GET /bbs/package/:section/articles/new/:date
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $new(
  connection: IConnection,
  section: string,
  date: string & Format<"date">,
): Promise<$new.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...$new.METADATA,
      template: $new.METADATA.path,
      path: $new.path(section, date),
    },
  );
}
export namespace $new {
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "GET",
    path: "/bbs/package/:section/articles/new/:date",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: string, date: string & Format<"date">) =>
    `/bbs/package/${encodeURIComponent(section ?? "null")}/articles/new/${encodeURIComponent(date ?? "null")}`;
}

/**
 * Store a new article.
 *
 * @param section Section code
 * @param input Content to store
 * @returns Newly archived article
 *
 * @controller BbsPackageArticlesController.store
 * @path POST /bbs/package/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
  connection: IConnection,
  section: string,
  input: store.Input,
): Promise<store.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...store.METADATA,
      template: store.METADATA.path,
      path: store.path(section),
    },
    input,
  );
}
export namespace store {
  export type Input = Resolved<IBbsArticle.IStore>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "POST",
    path: "/bbs/package/:section/articles",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = (section: string) =>
    `/bbs/package/${encodeURIComponent(section ?? "null")}/articles`;
}

/**
 * Update an article.
 *
 * @param section Section code
 * @param id Target article ID
 * @param input Content to update
 * @returns Updated content
 *
 * @controller BbsPackageArticlesController.update
 * @path PUT /bbs/package/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  section: string,
  id: string & Format<"uuid">,
  input: update.Input,
): Promise<update.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...update.METADATA,
      template: update.METADATA.path,
      path: update.path(section, id),
    },
    input,
  );
}
export namespace update {
  export type Input = Resolved<IBbsArticle.IStore>;
  export type Output = Primitive<IBbsArticle>;

  export const METADATA = {
    method: "PUT",
    path: "/bbs/package/:section/articles/:id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: string, id: string & Format<"uuid">) =>
    `/bbs/package/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
}

/**
 * Delete an article.
 *
 * @param section Section code
 * @param id Target article ID
 *
 * @controller BbsPackageArticlesController.$$delete
 * @path DELETE /bbs/package/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $$delete(
  connection: IConnection,
  section: string,
  id: string & Format<"uuid">,
): Promise<void> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...$$delete.METADATA,
      template: $$delete.METADATA.path,
      path: $$delete.path(section, id),
    },
  );
}
export namespace $$delete {
  export const METADATA = {
    method: "DELETE",
    path: "/bbs/package/:section/articles/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: string, id: string & Format<"uuid">) =>
    `/bbs/package/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
}

/**
 * Remove every articles in a section.
 *
 * @param section Section code
 * @internal
 *
 * @controller BbsPackageArticlesController.$delete
 * @path DELETE /bbs/package/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function $delete(
  connection: IConnection,
  section: string,
): Promise<void> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...$delete.METADATA,
      template: $delete.METADATA.path,
      path: $delete.path(section),
    },
  );
}
export namespace $delete {
  export const METADATA = {
    method: "DELETE",
    path: "/bbs/package/:section/articles",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: string) =>
    `/bbs/package/${encodeURIComponent(section ?? "null")}/articles`;
}
