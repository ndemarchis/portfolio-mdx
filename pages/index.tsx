import Head from "next/head";
import Link from "next/link";
import SocialIcons from "../src/components/SocialIcons";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-2">
      <Head>
        <title>nick deMarchis</title>
      </Head>
      <h1 className="transition-all font-black hover:font-extralight hover:scale-110">
        nick deMarchis
      </h1>
      <div className="flex flex-row gap-5">
        <Link href="/about" className="link">
          who am i?
        </Link>
        <Link href="/stuff" className="link">
          what have i done?
        </Link>
      </div>
      <div className="flex flex-row">
        <SocialIcons />
      </div>
    </div>
  );
};

export default Home;
