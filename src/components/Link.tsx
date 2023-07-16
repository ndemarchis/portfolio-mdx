import NextLink from "next/link";

const Link = ({
  className = "link",
  href = "#",
  ...props
}: React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) => {
  return (
    <NextLink
      {...props}
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <>{props.children}</>
    </NextLink>
  );
};

export default Link;
