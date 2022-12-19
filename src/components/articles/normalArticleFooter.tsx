import ExtLink from "../Link";

export default function NormalArticleFooter(frontMatter: ArticleMetaProps) {
  return (
    <>
      <hr className="w-1/2 mx-auto my-8" />
      <p className="text-light text-center mx-auto italic">
        Published
        {frontMatter.publishedOn && ` on ${frontMatter.publishedOn}`}
        {frontMatter.publishedUrl && frontMatter.publication && (
          <>
            {" in "}
            <ExtLink href={frontMatter.publishedUrl}>
              {frontMatter.publication}
            </ExtLink>
          </>
        )}
        .
      </p>
    </>
  );
}
