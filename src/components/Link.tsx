import NextLink from "next/link";

const Link = ({
  className = "link",
  ...props
}: React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & { href: string }
>) => {
  return (
    <NextLink
      {...props}
      className={className}
      href={props.href}
      target="_blank"
      rel="noreferrer noopener"
      legacyBehavior
    >
      {props.children}
    </NextLink>
  );
};

export default Link;
