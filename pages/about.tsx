import InLink from "next/link";
import Link from "../src/components/Link";
import NormalArticle from "../src/components/articles/NormalArticle";

const About = () => {
  return (
    <NormalArticle>
      <p>
        i&rsquo;m nick deMarchis, a frontend web engineer and occasional writer.
      </p>
      <p>
        i am currently a software engineer at{" "}
        <Link href="https://seatgeek.com/about">SeatGeek</Link> in New York.
      </p>
      <p>
        i graduated from Bucknell University in may 2022 with a B.S. in computer
        engineering and a minor in film and media studies. i was also the print
        managing editor for{" "}
        <Link href="http://bucknellian.net">The Bucknellian</Link> student
        newspaper.
      </p>
      <div className="w-full flex justify-center my-10">
        <InLink href="/">back to home</InLink>
      </div>
    </NormalArticle>
  );
};

export default About;
