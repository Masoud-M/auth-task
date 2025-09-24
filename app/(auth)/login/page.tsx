import Button from "@/components/auth/Button";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import Wrapper from "@/components/auth/Wrapper";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Wrapper title="Login">
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
            <Button variant="outline" type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>
      <p className="mt-6 text-neutral-500 text-sm">
        Don't have an account?
        <Link href="/signup" className="ml-1 underline underline-offset-4">
          Signup
        </Link>
      </p>
    </Wrapper>
  );
}
