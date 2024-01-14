import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-200 text-gray-800">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div className="font-bold text-2xl">My site</div>
        <div className="flex gap-10">
          <Link
            href="/"
            className=" no-underline hover:text-indigo-700 p-2 rounded-sm transition-transform"
          >
            Home
          </Link>
          <Link
            href="/CreateUser"
            className=" no-underline hover:text-indigo-700 p-2 rounded-sm transition-transform"
          >
            Create User
          </Link>
          <Link
            href="/ClientMember"
            className=" no-underline hover:text-indigo-700 p-2 rounded-sm transition-transform"
          >
            Client Member
          </Link>
          <Link
            href="/Member"
            className=" no-underline hover:text-indigo-700 p-2 rounded-sm transition-transform"
          >
            Member
          </Link>
          <Link
            href="/Public"
            className=" no-underline hover:text-indigo-700 p-2 rounded-sm transition-transform"
          >
            Public
          </Link>
          {session ? (
            <Link
              href={"/api/auth/signout?callbackUrl=/"}
              className=" no-underline hover:text-indigo-700 p-2 rounded-sm transition-transform"
            >
              Sign out
            </Link>
          ) : (
            <Link
              href={"/api/auth/signin"}
              className=" no-underline hover:text-indigo-700 p-2 rounded-sm transition-transform"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
