import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import InLink from "next/link";
import Head from "next/head";
import path from "path";

import { articleFilePaths, ARTICLES_PATH } from "../utils/mdxUtils";

import NormalArticle from "../src/components/articles/NormalArticle";
import ExLink from "../src/components/Link";
import { formatDate } from "../utils/dateUtils";

const hoverPara =
  "outline outline-tan/50 outline-0 hover:outline-4 outline-offset-8 overflow-visible rounded-lg transition-all";

const Stuff = (props: {
  articles: { content: string; data: ArticleMetaProps; filePath: string }[];
}) => {
  return (
    <NormalArticle>
      <Head>
        <title>stuff | nick deMarchis</title>
      </Head>
      <h1>Articles</h1>
      <p className={`${hoverPara}`}>
        <b>It’s all about trust</b>: As Chief of Public Safety, Steve Barilar
        worked to build it&nbsp;—&nbsp;how did he do?{" "}
        <ExLink href="https://bucknellian.net/108685/">(link)</ExLink>
        <p className="text-tan text-xs italic">
          The Bucknellian, January 28, 2022
        </p>
      </p>
      <p className={`${hoverPara}`}>
        <b>Love what you do</b>: An interview with Dean Kari Conrad{" "}
        <ExLink href="https://bucknellian.net/110593/">(link)</ExLink>
        <p className="text-tan text-xs italic">
          The Bucknellian, April 1, 2022
        </p>
      </p>

      {props.articles
        .sort((a, b) => -a.data?.publishedOn.localeCompare(b.data?.publishedOn))
        .map((article) => (
          <p key={article.filePath} className={`${hoverPara}`}>
            <b>{article.data.title}</b>
            {article.data.subtitle && `: ${article.data.subtitle}`}{" "}
            <Link
              as={`/articles/${article.filePath.replace(/\.mdx?$/, "")}`}
              href={`/articles/[slug]`}
            >
              (link)
            </Link>
            <p className="text-tan text-xs italic">
              {[
                article.data?.publication,
                article.data?.publishedOn &&
                  formatDate(article.data.publishedOn),
              ].join(", ")}
            </p>
          </p>
        ))}

      <h1 className="mt-8">Videos</h1>
      <p className={`${hoverPara}`}>
        &ldquo;or as needed&rdquo; — a short film{" "}
        <ExLink href="https://youtu.be/Jz_2KaMyF5Y/">(link)</ExLink>
      </p>
      <p className={`${hoverPara}`}>
        &ldquo;let it go&rdquo; — a piano and cello cover of james bay{" "}
        <ExLink href="https://youtu.be/3tOWhpLQrYc">(link)</ExLink>
      </p>

      <h1 className="mt-8">Projects</h1>
      <p className={`${hoverPara}`}>
        &apos;rayschedule.com{" "}
        <ExLink href="https://rayschedule.com/">(link)</ExLink>
      </p>

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
