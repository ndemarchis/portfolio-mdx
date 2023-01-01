/* eslint-disable @next/next/no-page-custom-font */

const Scripture = ({
  children,
}: React.PropsWithChildren<Record<string, never>>) => {
  return (
    <>
      <span className="font-serif text-lightpurple font-bold">{children}</span>
    </>
  );
};

export default Scripture;
