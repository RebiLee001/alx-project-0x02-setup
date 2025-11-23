import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-900 text-white p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">My Next.js Project</h2>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
        </ul>
      </nav>
      <nav>
  <ul className="flex space-x-4">
    <li><Link href="/home" className="hover:underline">Home</Link></li>
    <li><Link href="/about" className="hover:underline">About</Link></li>
    <li><Link href="/posts" className="hover:underline">Posts</Link></li>
  </ul>
</nav>

    </header>
  );
};

export default Header;
