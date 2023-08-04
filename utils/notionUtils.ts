import {
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type ExtractResponse<
  Type extends Extract<
    PageObjectResponse["properties"][keyof PageObjectResponse["properties"]]["type"],
    string
  >,
  Key extends string = "name"
> = Extract<PageObjectResponse["properties"][Key], { type: Type }>;