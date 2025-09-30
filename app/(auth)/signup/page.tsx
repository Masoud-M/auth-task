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

const formSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { signup, loading, error } = useUser();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signup({ email: values.email, password: values.password });
  }

  return (
    <Wrapper title="Signup">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            {...register("email")}
          />
          {errors.email?.message && (
            <ErrorMessage text={errors.email.message} />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register("password")} />
          <ErrorMessage text={} />
          {errors.password?.message && (
            <ErrorMessage text={errors.password.message} />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <ErrorMessage text={errors.confirmPassword.message} />
          )}
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Loading..." : "Signup"}
        </Button>
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
