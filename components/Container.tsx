export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="justify-center items-center grid min-h-svh">
      {children}
    </section>
  );
}
