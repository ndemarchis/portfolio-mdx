import React from "react";
import InLink from "next/link";
import ExLink from "./Link";

const Entry = ({
  title,
  subtitle,
  description,
  link,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  link?: {
    out: boolean;
    as?: string;
    href: string;
  };
}) => {
  return (
    <p className="outline outline-tan/50 outline-0 hover:outline-4 outline-offset-8 overflow-visible rounded-lg transition-all my-1 px-1 flex flex-col gap-1">
      <div className="leading-tight">
        {title && (subtitle ? <b>{title}</b> : title)}
        {title && subtitle && ": "}
        {subtitle}{" "}
        {link &&
          (link.out ? (
            <ExLink href={link.href}>(link)</ExLink>
          ) : (
            <InLink as={link.as} href={link.href}>
              (link)
            </InLink>
          ))}
      </div>
      {description && (
        <div className="text-tan text-xs italic">{description}</div>
      )}
    </p>
  );
};

export default Entry;
