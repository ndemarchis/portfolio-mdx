import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
  const links = [
    "http://linkedin.com/in/nickdemarchis",
    "http://github.com/ndemarchis",
    "mailto:nick@nickdemarchis.com",
  ];

  return (
    <>
      {links.map((item, index) => (
        <SocialIcon
          key={index}
          url={item}
          bgColor="#000000"
          fgColor="#ffffff"
          className="h-10"
        />
      ))}
    </>
  );
};

export default SocialIcons;
