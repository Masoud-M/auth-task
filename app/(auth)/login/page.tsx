"use client";

import Button from "@/components/auth/Button";
import Input from "@/components/auth/Input";
import Label from "@/components/auth/Label";
import Wrapper from "@/components/auth/Wrapper";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLogin } from "@/lib/hooks/useLogin";

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

  const { mutate: login, status } = useLogin();

  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values);
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
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" {...register("password")} />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Button
              disabled={status === "pending"}
              type="submit"
              className="w-full"
            >
              {status === "pending" ? "Loading..." : "Login"}
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
