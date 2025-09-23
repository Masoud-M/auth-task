import Link from "next/link";

export default function LoginPage() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mx-auto px-4 py-24 max-w-[380px] min-h-[90dvh]">
        <h1 className="place-self-start mb-8 font-semibold text-3xl">Login</h1>
        INPUTS
        <p className="mt-6 text-neutral-500 text-sm">
          Don't have an account?
          <Link href="/signup" className="ml-1 underline underline-offset-4">
            Signup
          </Link>
        </p>
      </div>
    </section>
  );
}
