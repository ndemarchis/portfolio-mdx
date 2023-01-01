import Link from "../Link";

const Bible = ({
  children,
  verse,
}: React.PropsWithChildren<{ verse?: string }>) => {
  const verseToLink = verse || children?.toString();

  if (verseToLink) {
    return (
      <Link
        href={`https://bible.oremus.org/?version=NRSV&passage=${encodeURIComponent(
          verseToLink
        )}`}
      >
        {children}
      </Link>
    );
  } else {
    return <>{children}</>;
  }
};

export default Bible;
