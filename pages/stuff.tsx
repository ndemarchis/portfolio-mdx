import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { articleFilePaths, ARTICLES_PATH } from "../utils/mdxUtils";

import NormalArticle from "../src/components/articles/NormalArticle";
import ExLink from "../src/components/Link";
import InLink from "next/link";

const Stuff = ({ articles }: any) => {
  return (
    <NormalArticle>
      <h1>Articles</h1>
      <p>
        <b>It’s all about trust</b>: As Chief of Public Safety, Steve Barilar
        worked to build it&nbsp;—&nbsp;how did he do?{" "}
        <ExLink href="https://bucknellian.net/108685/">(link)</ExLink>
      </p>
      <p>
        <b>Love what you do</b>: An interview with Dean Kari Conrad{" "}
        <ExLink href="https://bucknellian.net/110593/">(link)</ExLink>
      </p>

      <h1>Videos</h1>
      <p>
        &ldquo;or as needed&rdquo; — a short film{" "}
        <ExLink href="https://youtu.be/Jz_2KaMyF5Y/">(link)</ExLink>
      </p>
      <p>
        &ldquo;let it go&rdquo; — a piano and cello cover of james bay{" "}
        <ExLink href="https://youtu.be/3tOWhpLQrYc">(link)</ExLink>
      </p>

      <h1>Projects</h1>
      <p>
        &apos;rayschedule.com{" "}
        <ExLink href="https://rayschedule.com/">(link)</ExLink>
      </p>

      {articles.map((article: any) => (
        <li key={article.filePath}>
          <Link
            as={`/articles/${article.filePath.replace(/\.mdx?$/, "")}`}
            href={`/articles/[slug]`}
          >
            {article.data.title}
          </Link>
        </li>
      ))}

      <div className="w-full flex justify-center my-10">
        <InLink href="/">back to home</InLink>
      </div>
      <div className="w-full flex justify-center my-12 italic font-extralight">
        and more to come...
      </div>
    </NormalArticle>
  );
};

export function getStaticProps() {
  const articles = articleFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(ARTICLES_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { articles } };
}

export default Stuff;
