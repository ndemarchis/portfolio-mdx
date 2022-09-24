import Head from "next/head";

const Meta = (props: MetaProps) => {
  return (
    <Head>
      <title>{`${props.title}${props.title ? " | " : ""}nick deMarchis`}</title>
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: "",
};
