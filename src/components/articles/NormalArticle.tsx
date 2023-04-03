import ArticleMeta from "./ArticleMeta";

const NormalArticle = (props: { children: any; metaProps?: ArticleMetaProps }) => {
  return (
    <>
      {props.metaProps && <ArticleMeta {...props.metaProps} />}
      <div className="flex-col flex px-5 py-10 gap-5 text-lg [&>*]:m-auto [&>*]:md:w-1/2 [&>*]:max-w-5xl ">
        {props.children}
      </div>
    </>
  );
};

export default NormalArticle;
