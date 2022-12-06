import Link from "next/link";
import SocialIcons from "../src/components/SocialIcons";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-2">
      <h1 className="transition-all font-black hover:font-extralight hover:scale-110">
        nick deMarchis
      </h1>
      <div className="flex flex-row gap-5">
        <Link href="/about">who am i?</Link>
        <Link href="/stuff">what have i done?</Link>
      </div>
      <div className="flex flex-row">
        <SocialIcons />
      </div>
      <div className="my-10 font-extralight italic text-stone-600">
        more coming soon...
      </div>
    </div>
  );
};

export default Home;
