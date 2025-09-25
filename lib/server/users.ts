"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

////////////////////
//                //
//    Get User    //
//                //
////////////////////
export async function getUser() {
  const { auth } = createClient();
  const user = (await auth.getUser()).data.user;

  return user;
}

//////////////////
//              //
//    Signup    //
//              //
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

  if (error) {
    throw Error(error?.message);
  } else {
    await loginAction(values);
    redirect("/dashboard");
  }
}

/////////////////
//             //
//    Login    //
//             //
/////////////////
export async function loginAction(values: { email: string; password: string }) {
  const supabase = createClient();
  const { auth } = supabase;

  const { error, data } = await auth.signInWithPassword({
    email: values.email,
    password: values.password,
  });

  if (error) {
    redirect("/error");
  }

  return data.user;
}

//////////////////
//              //
//    Logout    //
//              //
//////////////////
export async function logoutAction() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}
