import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import NextImage from "next/image";
import path from "path";
import ExtLink from "../../src/components/Link";
import { articleFilePaths, ARTICLES_PATH } from "../../utils/mdxUtils";
import imageMetadata from "../../src/imageMetadata";
import { NormalArticle, ArticleMeta, normalArticleHeadline, normalArticleFooter } from "../../src/components/articles";

const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  //   TestComponent: dynamic(() => import('../../components/TestComponent')),
  a: ExtLink,
  img: ({
    src,
    height,
    width,
    alt,
    ...rest
  }: {
    src: string;
    height: number;
    width: number;
    alt: string;
  }) => (
    <NextImage src={src} height={height} width={width} alt={alt} {...rest} />
  ),
  Scripture: dynamic(() => import("../../src/components/texts/Scripture")),
  Verse: dynamic(() => import("../../src/components/texts/Verse")),
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
          <div className="flex justify-between p-4">
            <Link href="/stuff">⭠ back to the cool articles</Link>
            <Link href="/">back to your home ⭢</Link>
          </div>
        </nav>
      </header>
      <main>
        {frontMatter.abnormal?.toString() === "true" ? (
          <MDXRemote {...source} components={components} />
        ) : (
          <NormalArticle>
            <p className="text-right italic">{frontMatter?.publishedOn}</p>
            {normalArticleHeadline(frontMatter)}
            <MDXRemote {...source} components={components} />
            {normalArticleFooter(frontMatter)}
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
      rehypePlugins: [imageMetadata],
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

