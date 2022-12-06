import Link from "next/link";
import React, { HTMLProps } from "react";
import SocialIcons from "./SocialIcons";

const Header = (props: { className: string }) => {

  return (
    <div className={`${props.className}`}>
      <h2 className="w-full no-underline" style={{ fontWeight: 900 }}>
        <Link href="/">nick&nbsp;deMarchis</Link>
      </h2>
      <div className="flex flex-row-reverse"><SocialIcons /></div>
    </div>
  );
};

export default Header;
