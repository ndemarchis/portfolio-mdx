export default function ArticleLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex-col flex px-5 py-10 gap-5 text-lg my-auto [&>*]:m-auto [&>*]:md:w-1/2 [&>*]:max-w-5xl ">
        {children}
      </div>
    </>
  );
}
