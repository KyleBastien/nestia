/**
 * @packageDocumentation
 * @module api.functional.x.bbs.articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsArticle } from "../../../../structures/IBbsArticle";
import type { IPage } from "../../../../structures/IPage";

export * as comments from "./comments";

/**
 * @controller BbsArticlesController.index
 * @path GET /x/bbs/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  section: string,
  query: IPage.IRequest,
): Promise<IPage<IBbsArticle.ISummary>> {
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
      path: index.path(section, query),
    },
  );
}
export namespace index {
  export type Output = Primitive<IPage<IBbsArticle.ISummary>>;

  export const METADATA = {
    method: "GET",
    path: "/x/bbs/:section/articles",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: string, query: IPage.IRequest) =>
    `/x/bbs/${encodeURIComponent(section ?? "null")}/articles`;
}

/**
 * @controller BbsArticlesController.at
 * @path GET /x/bbs/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  section: string,
  id: string & Format<"uuid">,
): Promise<IBbsArticle> {
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
    path: "/x/bbs/:section/articles/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (section: string, id: string & Format<"uuid">) =>
    `/x/bbs/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
}

/**
 * Store a new article.
 *
 * @param section Section code
 * @param input Content to store
 * @returns Newly archived article
 *
 * @controller BbsArticlesController.store
 * @path POST /x/bbs/:section/articles
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
  connection: IConnection,
  section: string,
  input: store.Input,
): Promise<IBbsArticle> {
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
    path: "/x/bbs/:section/articles",
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
    `/x/bbs/${encodeURIComponent(section ?? "null")}/articles`;
}

/**
 * Update an article.
 *
 * @param section Section code
 * @param id Target article ID
 * @param input Content to update
 * @returns Updated content
 *
 * @controller BbsArticlesController.update
 * @path PUT /x/bbs/:section/articles/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  section: string,
  id: string & Format<"uuid">,
  input: update.Input,
): Promise<IBbsArticle> {
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
    path: "/x/bbs/:section/articles/:id",
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
    `/x/bbs/${encodeURIComponent(section ?? "null")}/articles/${encodeURIComponent(id ?? "null")}`;
}
