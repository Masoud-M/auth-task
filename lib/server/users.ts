"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

////////////////////
//    Get User    //
////////////////////
export async function getUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

//////////////////
//    Signup    //
//////////////////
export async function signupAction(values: {
  email: string;
  password: string;
}) {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
  });

  if (error) throw new Error(error.message);

  // Auto-login after signup
  const { error: loginError } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (loginError) throw new Error(loginError.message);

  redirect("/dashboard");
}

/////////////////
//    Login    //
/////////////////
export async function loginAction(values: { email: string; password: string }) {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (error) throw new Error(error.message);

  redirect("/dashboard");
}

//////////////////
//    Logout    //
//////////////////
export async function logoutAction() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);

  redirect("/");
}
