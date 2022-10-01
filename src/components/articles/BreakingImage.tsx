type ImageProps = {
  align?: "left" | "right";
  src: string;
  alt?: string;
  children: React.ReactNode;
  className?: string;
  imgClassName?: string;
  caption?: string;
};

const BreakingImage = (props: ImageProps) => {
  const { align, src, alt, children, className, imgClassName, caption } = props;

  const alignProps = () => {
    let str = "";
    if (align) {
      if (align === "left") {
        str = str + "md:float-left md:-translate-x-1/4 md:w-3/4 ";
      } else if (align == "right") {
        str = str + "md:float-right md:translate-x-1/4 md:w-3/4 ";
      }
    }
    return str;
  };

  return (
    <div className={`${(className && className)} md:flex md:flex-row ${align && "md:w-[150%]"} gap-5`}>
      <picture
        className={imgClassName ? imgClassName : "" + " " + alignProps()}
      >
        <img
          src={src}
          alt={alt}
          className="pointer-events-none"
        />
        {caption && <span className="color-gray">{caption}</span>}
      </picture>
      <div className={`flex flex-col gap-5 ${align && "md:w-3/4"}`}>
      {children}
      </div>
    </div>
  );
};

export default BreakingImage;
