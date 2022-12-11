import { FunctionComponent, useState } from "react";
import {
  LinkedinFilled,
  LinkedinOutlined,
  InstagramFilled,
  InstagramOutlined,
  GithubFilled,
  GithubOutlined,
  MailFilled,
  MailOutlined,
} from "@ant-design/icons";

import Link from "./Link";

type IconType = {
  filled: FunctionComponent;
  outlined: FunctionComponent;
  href: string;
};

const Icon = (icon: IconType) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="text-2xl"
    >
      <Link href={icon.href}>
        {hover ? <icon.filled /> : <icon.outlined />}
      </Link>
    </div>
  );
};

const SocialIcons = () => {
  const links: IconType[] = [
    {
      filled: LinkedinFilled,
      outlined: LinkedinOutlined,
      href: "https://linkedin.com/in/nickdemarchis",
    },
    {
      filled: GithubFilled,
      outlined: GithubOutlined,
      href: "https://github.com/ndemarchis",
    },
    {
      filled: InstagramFilled,
      outlined: InstagramOutlined,
      href: "https://instagram.com/nick.demarchis",
    },
    {
      filled: MailFilled,
      outlined: MailOutlined,
      href: "mailto:nick@nickdemarchis.com",
    },
  ];

  return (
    <div className="flex flex-row gap-4 my-4 h-fit items-stretch">
      {links.map((i, index) => (
        <Icon {...i} key={index} />
      ))}
    </div>
  );
};

export default SocialIcons;
