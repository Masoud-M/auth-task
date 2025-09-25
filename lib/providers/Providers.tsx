"use client";

import { User } from "@supabase/supabase-js";
import { UserProvider } from "./UserProvider";

export default function Providers({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser?: User | null;
}) {
  return <UserProvider initialUser={initialUser}>{children}</UserProvider>;
}
