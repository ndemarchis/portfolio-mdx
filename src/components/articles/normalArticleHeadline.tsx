export default function NormalArticleHeadline(frontMatter: ArticleMetaProps) {
  return (
    <>
      <p className="italic text-tan my-3 text-2xl">{frontMatter?.type}</p>
      <h1>
        <span className="underline decoration-purple decoration-4">
          {frontMatter.title}
        </span>
        {frontMatter.subtitle && (
          <>
            <span>: </span>
            <span className="no-underline decoration-0 font-light italic">
              {frontMatter.subtitle}
            </span>
          </>
        )}
      </h1>
    </>
  );
}
