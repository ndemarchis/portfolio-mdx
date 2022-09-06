import { Html, Head, Main, NextScript } from "next/document";
import Header from "../src/components/Header";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <Header className="m-auto md:w-10/12 max-w-5xl flex justify-evenly flex-row items-center w-full p-5 font-mono" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
