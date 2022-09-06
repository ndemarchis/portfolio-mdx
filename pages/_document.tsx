import { Html, Head, Main, NextScript } from "next/document";
import { SocialIcon } from "react-social-icons";

const MyDocument = () => {
  const socialItems = [
    "http://linkedin.com/in/nickdemarchis",
    "http://github.com/ndemarchis",
    "mailto:nick@nickdemarchis.com",
  ].map((item, index) => (
    <SocialIcon
      key={index}
      url={item}
      bgColor="#00000000"
      fgColor="#ffffff"
      className="h-10"
    />
  ));

  return (
    <Html lang="en">
      <Head>
        <div className="flex justify-evenly flex-row items-center w-full p-5">
          <div className="">
            <h1 className="">nick&nbsp;deMarchis</h1>
          </div>
          <div className="">{socialItems}</div>
        </div>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
