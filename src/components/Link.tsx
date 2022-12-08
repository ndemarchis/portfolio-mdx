import NextLink from "next/link";

const Link = (props: React.PropsWithChildren<{ href: string }>) => {
  return (
    <NextLink href={props.href} target="_blank">
      <a rel="noreferrer noopener" target="_blank">
        {props.children}
      </a>
    </NextLink>
  );
};

export default Link;
