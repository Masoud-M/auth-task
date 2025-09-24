import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import Link from "next/link";

export default function SignupPage() {
  return (
    <section className="flex justify-center items-center w-full min-h-svh">
      <div className="bg-neutral-100 p-6 md:p-10 rounded-md w-full max-w-sm">
        <h1 className="place-self-start mb-8 font-semibold text-2xl">Signup</h1>
        <form>
          <div className="flex flex-col gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="email@example.com"
              id="email"
              required
            />
          </div>
        </form>
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
