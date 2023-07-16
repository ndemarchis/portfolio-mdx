import ArticleMeta from "./ArticleMeta";

const NormalArticle = (props: React.PropsWithChildren<{
  metaProps?: ArticleMetaProps;
}>) => {
  return (
    <>
      {props.metaProps && <ArticleMeta {...props.metaProps} />}
      <div
        className={`
        flex-col flex 
        [&>*]:m-auto [&>:not(.full-width)]:md:w-1/2 [&>:not(.full-width)]:max-w-5xl 
        px-5 py-10 gap-5 text-lg
      `}
      >
        {props.children}
      </div>
    </>
  );
};

export default NormalArticle;
