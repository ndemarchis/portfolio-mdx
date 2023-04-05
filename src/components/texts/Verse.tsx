const Verse = ({
  children,
}: React.PropsWithChildren<Record<string, never>>) => {
  return (
    <span className="select-none">
      <span className="text-[70%] leading-[0] relative -top-1 align-super">
        {children}
      </span>{" "}
    </span>
  );
};

export default Verse;
