"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { useUser } from "@/lib/providers/UserProvider";

function Navbar() {
  const { user, logout, loading } = useUser();

  return (
    <header>
      <nav className="px-8 py-4">
        <ul className="flex justify-center items-center gap-4">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          {!user && (
            <>
              <li className="hover:underline">
                <Link href="/login">Login</Link>
              </li>
              <li className="hover:underline">
                <Link href="/signup">Signup</Link>
              </li>
            </>
          )}
          <li className="hover:underline">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          {user && (
            <li>
              <Button
                className="bg-red-500"
                disabled={loading}
                onClick={logout}
              >
                {loading ? "Logging out..." : "Logout"}
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
