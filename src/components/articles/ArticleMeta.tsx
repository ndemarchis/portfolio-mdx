import Head from "next/head";

const ArticleMeta = (props: ArticleMetaProps) => {
  return (
    <Head>
      <title>{`${props.title}${props.title ? " | " : ""}nick deMarchis`}</title>
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description}/>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content={`https://nickdemarchis.com/articles/${props.slug}`}/>
      <meta property="og:image" content={`/articles/${props.slug}/${props.ogImage}`} />
    </Head>
  );
};

export default ArticleMeta;

ArticleMeta.defaultProps = {
  title: "",
};
