import { Html, Head, Main, NextScript } from "next/document";
import Header from "../src/components/Header";

const MyDocument = () => {
  return (
    <Html lang="en">
      <Head>
        <Header className="m-auto md:w-10/12 max-w-5xl" />
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
