import Link from "next/link";
import React, { HTMLProps } from "react";
import { SocialIcon } from "react-social-icons";

const Header = (props: { className: string }) => {
  const socialItems = [
    "http://linkedin.com/in/nickdemarchis",
    "http://github.com/ndemarchis",
    "mailto:nick@nickdemarchis.com",
  ].map((item, index) => (
    <SocialIcon
      key={index}
      url={item}
      bgColor="#000000"
      fgColor="#ffffff"
      className="h-10"
    />
  ));

  return (
    <div className={`${props.className}`}>
      <h2 className="w-full no-underline" style={{ fontWeight: 900 }}>
        <Link href="/">nick&nbsp;deMarchis</Link>
      </h2>
      <div className="flex flex-row-reverse">{socialItems}</div>
    </div>
  );
};

export default Header;
