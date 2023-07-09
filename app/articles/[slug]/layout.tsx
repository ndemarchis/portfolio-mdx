import NormalArticle from "../../../src/components/articles/NormalArticle";
export default function ArticleLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <NormalArticle>{children}</NormalArticle>;
}
