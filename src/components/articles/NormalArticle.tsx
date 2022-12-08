import ArticleMeta from "./ArticleMeta";

const NormalArticle = (props: { children: any; metaProps?: MetaProps }) => {
  return (
    <>
      {props.metaProps && <ArticleMeta {...props.metaProps} />}
      <div className="flex-col flex m-auto md:w-1/2 max-w-5xl px-5 py-10 gap-5 text-base">
        {props.children}
      </div>
    </>
  );
};

export default NormalArticle;
