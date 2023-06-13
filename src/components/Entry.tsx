import React from "react";
import InLink from "next/link";
import ExLink from "./Link";

type LinkType = {
  out: boolean;
  as?: string;
  href: string;
};

const Link = ({
  link,
  children,
  ...props
}: React.PropsWithChildren<
  React.HTMLAttributes<HTMLElement> & { link?: LinkType }
>) => {
  if (link) {
    if (link.out) {
      return (
        <ExLink href={link.href} {...props}>
          {children}
        </ExLink>
      );
    } else {
      return (
        <InLink as={link.as} href={link.href} {...props}>
          {children}
        </InLink>
      );
    }
  } else return <>{children}</>;
};

const Entry = ({
  title,
  subtitle,
  description,
  link,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  link?: LinkType;
}) => {
  return (
    <Link
      link={link}
      className="outline outline-tan/50 outline-0 hover:outline-4 outline-offset-8 overflow-visible rounded-lg transition-all hover:text-tan my-1 px-1 w-full flex flex-col gap-1 group"
    >
      <div className="leading-tight">
        {title && (
          <span className="link group-hover:link-hover">
            {subtitle ? <b>{title}</b> : title}
          </span>
        )}
        {title && subtitle && ": "}
        {subtitle}
      </div>
      {description && (
        <div className="text-tan text-xs italic">{description}</div>
      )}
    </Link>
  );
};

export default Entry;
