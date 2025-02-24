'use client'
import { useContext } from "react";
import Link from "next/link";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user } =  useUser();


  return (
    <nav className="flex items-center justify-between w-full max-w-6xl mx-auto p-4">
      <ul className="flex items-center space-x-12">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/page2">Page 1</Link></li>
      </ul>
      {user ? (
        <span className="text-gray-700 font-bold">Welcome, {user.name}!</span>
      ) : (
        <Link href="/page3" className="text-blue-500 font-bold">
          Sign Up
        </Link>
      )}
    </nav>
  );
};

export default Navbar;