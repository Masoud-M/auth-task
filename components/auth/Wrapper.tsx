export default function Wrapper({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="flex justify-center items-center p-4 w-full min-h-svh">
      <div className="bg-neutral-100 p-6 md:p-10 rounded-md w-full max-w-sm">
        <h1 className="place-self-start mb-8 font-semibold text-2xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
