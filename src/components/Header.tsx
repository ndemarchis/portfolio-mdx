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
      bgColor="#00000000"
      fgColor="#ffffff"
      className="h-10"
    />
  ));

  return (
    <div
      className={`${props.className}`}
    >
      <h1 className="w-full">nick&nbsp;deMarchis</h1>
      <div className="flex flex-row-reverse">{socialItems}</div>
    </div>
  );
};

export default Header;
