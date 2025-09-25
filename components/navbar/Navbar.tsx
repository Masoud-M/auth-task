"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { useLogout } from "@/lib/hooks/useLogout";
import { useGetUser } from "@/lib/hooks/useGetUser";

function Navbar() {
  const { data } = useGetUser();
  const { mutate: logout, status } = useLogout();
  return (
    <header>
      <nav className="px-8 py-4">
        <ul className="flex justify-center items-center gap-4">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/login">Login</Link>
          </li>
          <li className="hover:underline">
            <Link href="/signup">Signup</Link>
          </li>
          <li className="hover:underline">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          {data && (
            <li>
              <Button
                className="bg-red-500"
                disabled={status === "pending"}
                onClick={() => logout()}
              >
                {status === "pending" ? "Logging out..." : "Logout"}
              </Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
