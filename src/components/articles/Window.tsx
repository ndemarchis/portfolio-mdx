interface Props
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> {
  background: React.ReactNode;
  screensHeight?: number;
}

const Window = (props: Props) => {
  const { children, style, screensHeight, ...rest } = props;
  return (
    <div
      style={{
        ...style,
        height: screensHeight ? `${screensHeight * 100}vh` : style?.height,
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Window;
