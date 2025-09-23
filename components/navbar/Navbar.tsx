import Link from "next/link";

function Navbar() {
  return (
    <header>
      <nav>
        <ul className="flex gap-4 text-blue-500">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/login">Login</Link>
          </li>
          <li className="hover:underline">
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
