"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { loginAction, signupAction, logoutAction } from "@/lib/server/users";

type AuthValues = { email: string; password: string };

type UserContextValue = {
  user: User | null;
  setUser: (u: User | null) => void;
  loading: boolean;
  setLoading: (b: boolean) => void;
  error: string | null;
  setError: (e: string | null) => void;
  login: (values: AuthValues) => Promise<void>;
  signup: (values: AuthValues) => Promise<void>;
  logout: () => Promise<void>;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function UserProvider({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser?: User | null;
}) {
  const [user, setUser] = useState<User | null>(initialUser ?? null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function login(values: AuthValues) {
    setLoading(true);
    setError(null);
    try {
      const loggedInUser = await loginAction(values);
    } catch (err: any) {
      setError(err.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

  async function signup(values: AuthValues) {
    setLoading(true);
    setError(null);
    try {
      await signupAction(values);
    } catch (err: any) {
      setError(err.message ?? "Signup failed");
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    setError(null);
    try {
      await logoutAction();
      setUser(null);
    } catch (err: any) {
      setError(err.message ?? "Logout failed");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (initialUser !== undefined) {
      setUser(initialUser);
    }
  }, [initialUser]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
}
