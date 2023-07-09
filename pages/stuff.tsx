import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import path from "path";

import { articleFilePaths, ARTICLES_PATH } from "../utils/mdxUtils";

import NormalArticle from "../src/components/articles/NormalArticle";
import ExLink from "../src/components/Link";
import { formatDate } from "../utils/dateUtils";
import Entry from "../src/components/Entry";

const Stuff = (props: {
  articles: { content: string; data: ArticleMetaProps; filePath: string }[];
}) => {
  return (
    <NormalArticle>
      <Head>
        <title>stuff | nick deMarchis</title>
      </Head>
      <h1>Articles</h1>
      <Entry
        title="It’s all about trust"
        subtitle="As Chief of Public Safety, Steve Barilar worked to build it&nbsp;—&nbsp;how did he do?"
        description="The Bucknellian, January 28, 2022"
        link={{ href: "https://bucknellian.net/108685/", out: true }}
      />
      <Entry
        title="Love what you do"
        subtitle="An interview with Dean Kari Conrad"
        description="The Bucknellian, April 1, 2022"
        link={{ href: "https://bucknellian.net/110593/", out: true }}
      />

      {props.articles
        .sort((a, b) => -a.data?.publishedOn.localeCompare(b.data?.publishedOn))
        .map((article) => (
          <Entry
            key={article.filePath}
            title={article.data.title}
            subtitle={article.data.subtitle}
            link={{
              out: false,
              as: `/articles/${article.filePath.replace(/\.mdx?$/, "")}`,
              href: "/articles/[slug]",
            }}
            description={[
              article.data?.publication,
              article.data?.publishedOn && formatDate(article.data.publishedOn),
            ].join(", ")}
          />
        ))}

      <ExLink href="https://muckrack.com/ndemarchis" className="link text-right w-full italic text-sm">read more...</ExLink>

      <h1 className="pt-8">Videos</h1>
      <Entry
        title="&ldquo;or as needed&rdquo;"
        subtitle="a short film"
        link={{
          out: true,
          href: "https://youtu.be/Jz_2KaMyF5Y/",
        }}
      />
      <Entry
        title="&ldquo;field notes&rdquo;"
        subtitle="bucknell university's 2021 senior art exhibition"
        link={{
          out: true,
          href: "https://museum.bucknell.edu/2021/01/01/annual-senior-art-exhibition-presentation-tuesday-april-20-6-p-m/",
        }}
      />
      <Entry
        title="&ldquo;let it go&rdquo;"
        subtitle="a piano and cello cover of james bay"
        link={{
          out: true,
          href: "https://youtu.be/3tOWhpLQrYc",
        }}
      />
      <h1 className="pt-8">Projects</h1>
      <Entry
        title="'rayschedule.com"
        link={{
          out: true,
          href: "https://rayschedule.com/",
        }}
      />

      <div className="w-full flex justify-center my-10">
        <Link href="/" className="link">
          back to home
        </Link>
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
