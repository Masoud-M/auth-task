"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import Wrapper from "@/components/auth/Wrapper";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useUser } from "@/lib/providers/UserProvider";
import ErrorMessage from "@/components/auth/ErrorMessage";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, loading, error } = useUser();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await login(values);
  }

  return (
    <Wrapper title="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              placeholder="email@example.com"
              id="email"
              {...register("email")}
            />
            {errors.email?.message && (
              <ErrorMessage text={errors.email.message} />
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" {...register("password")} />
            {errors.password?.message && (
              <ErrorMessage text={errors.password.message} />
            )}
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-col gap-2">
            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "Loading..." : "Login"}
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
