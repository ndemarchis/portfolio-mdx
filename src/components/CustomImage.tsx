import Image from 'next/image';

export interface CustomImageProps extends React.ComponentProps<typeof Image>{
  customClassName?: string;
}

const CustomImage = ({ src, alt, ...props }: CustomImageProps) => {
  return (
    <div className={`${props.customClassName} w-[10rem] p-10 mx-auto`}>
      <Image
        src={src}
        width={300}
        height={100}
        alt={alt}
        {...props}
      />
    </div>
  );
}
export default CustomImage;
