import fs from "fs";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import NextImage from "next/image";
import path from "path";
import ExtLink from "../../src/components/Link";
import { articleFilePaths, ARTICLES_PATH } from "../../utils/mdxUtils";
import imageMetadata from "../../src/imageMetadata";
import {
  NormalArticle,
  ArticleMeta,
  normalArticleHeadline,
  normalArticleFooter,
} from "../../src/components/articles";
import { formatDate } from "../../utils/dateUtils";
import { GetStaticPaths, GetStaticProps } from "next";

const components: MDXRemoteProps["components"] = {
  a: ExtLink,
  // @ts-expect-error something with src being undefined
  img: NextImage,
  Scripture: dynamic(() => import("../../src/components/texts/Scripture")),
  Verse: dynamic(() => import("../../src/components/texts/Verse")),
  NoMarginsArticle: dynamic(
    () => import("../../src/components/articles/NoMarginsArticle")
  ),
  Window: dynamic(() => import("../../src/components/articles/Window")),
  Head,
};

export default function ArticlePage({
  source,
  frontMatter,
}: {
  source: Omit<MDXRemoteProps, "components" | "lazy">;
  frontMatter: ArticleMetaProps;
}) {
  return (
    <>
      <ArticleMeta {...frontMatter} />
      <header className="p-2">
        <nav>
          <div className="flex justify-between p-4">
            <Link href="/stuff">⭠ back to articles</Link>
            <Link href="/">back to your home ⭢</Link>
          </div>
        </nav>
      </header>
      <main>
        {frontMatter.abnormal?.toString() === "true" ? (
          <MDXRemote {...source} components={components} />
        ) : (
          <NormalArticle>
            {normalArticleHeadline(frontMatter)}
            <p className="text-center italic bg-lightpurple text-black !w-full !max-w-none !my-4 p-4 uppercase text-xs font-black box-border">
              {[
                ...[
                  frontMatter?.publishedOn &&
                    formatDate(frontMatter?.publishedOn),
                ],
                ...[frontMatter?.publishedUrl && frontMatter?.publication],
              ].join(", ")}
            </p>
            <MDXRemote {...source} components={components} />
            {normalArticleFooter(frontMatter)}
          </NormalArticle>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  [key: string]: unknown;
}> = async ({ params = { slug: "/" } }) => {
  const articleFilePath = path.join(ARTICLES_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(articleFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [imageMetadata],
      development: false,
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

export const getStaticPaths: GetStaticPaths = async () => {
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
