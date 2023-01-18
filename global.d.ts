type ArticleMetaProps = {
  type?: string; // type of article, e.g., opinion
  title?: string;
  subtitle?: string;

  authors?: string[];
  publication?: string;
  publishedOn: string;
  publishedUrl?: string;

  description?: string;
  ogImage?: string;

  abnormal?: string;
};
