import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import ArticleMeta from "../../src/components/articles/ArticleMeta";
import NormalArticle from "../../src/components/articles/NormalArticle";
import { articleFilePaths, ARTICLES_PATH } from "../../utils/mdxUtils";

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  //   TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
};

export default function ArticlePage({
  source,
  frontMatter,
}: {
  source: any;
  frontMatter: ArticleMetaProps;
}) {
  return (
    <>
      <ArticleMeta {...frontMatter} />
      <header className="p-2">
        <nav>
          <Link href="/" legacyBehavior>
            <a>⭠ Return to your home</a>
          </Link>
        </nav>
      </header>
      <main>
        {frontMatter.abnormal?.toString() === "true" ? (
          <MDXRemote {...source} components={components} />
        ) : (
          <NormalArticle>
            {frontMatter.publishedOn && (
              <p className="italic text-right text-tan">
                {frontMatter.publishedOn}
              </p>
            )}
            <h1>
              <span className="underline decoration-purple decoration-4">
                {frontMatter.title}
              </span>
              {frontMatter.subtitle && (
                <>
                  <span>: </span>
                  <span className="no-underline decoration-0 font-light italic">
                    {frontMatter.subtitle}
                  </span>
                </>
              )}
            </h1>
            <MDXRemote {...source} components={components} />
          </NormalArticle>
        )}
      </main>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const articleFilePath = path.join(ARTICLES_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(articleFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = articleFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
