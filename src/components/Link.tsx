import NextLink from "next/link";

const Link = (props: React.PropsWithChildren<{ href: string }>) => {
  return (
    <NextLink href={props.href} target="_blank" rel="noreferrer noopener">
      {props.children}
    </NextLink>
  );
};

export default Link;
