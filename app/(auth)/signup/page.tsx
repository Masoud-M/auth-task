import Button from "@/components/auth/Button";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import Wrapper from "@/components/auth/Wrapper";
import Link from "next/link";

export default function SignupPage() {
  return (
    <Wrapper title="Signup">
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="email@example.com"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" required />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password-confirm">Confirm your password</Label>
            <Input type="password" id="password-confirm" required />
          </div>
          <div className="flex flex-col gap-2">
            <Button type="submit" className="w-full">
              Signup
            </Button>
          </div>
        </div>
      </form>
      <p className="mt-6 text-neutral-500 text-sm">
        Already have an account?
        <Link href="/login" className="ml-1 underline underline-offset-4">
          Login
        </Link>
      </p>
    </Wrapper>
  );
}
