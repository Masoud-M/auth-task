import Link from "next/link";

export default function SignupPage() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center mx-auto px-4 py-24 max-w-sm min-h-[90dvh]">
        <h1 className="place-self-start mb-8 font-semibold text-3xl">Signup</h1>
        INPUTS
        <p className="mt-6 text-neutral-500 text-sm">
          Already have an account?
          <Link href="/login" className="ml-1 underline underline-offset-4">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
