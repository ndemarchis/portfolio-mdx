import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export type Title = {
  type: "title";
  title: Array<RichTextItemResponse>;
  id: string;
}

const isTitle = (title: any): title is Title => {
  return title.type === 'title';
}

export const convertTitle = (title: Title | any): string => {
  if (isTitle(title)) {
    console.log(title);
    console.log('is title');
  }
  return 'hey';
}