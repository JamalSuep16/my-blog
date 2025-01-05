"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search term:", searchTerm);
    // Handle the search logic here (e.g., API call, navigation, etc.)
  };
  return (
    <header className="fixed justify-between top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <img src="/logo.svg" alt="" />
      {/* Logo */}
      <img src="/search.svg" alt="Logo" className="h-5" />

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="relative w-full max-w-md">
        <input
          type="text"
          className="w-full px-4 py-2 text-sm text-gray-900 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-md hover:bg-"
        >
          Search
        </button>
      </form>

      <nav className="absolute top-full mt-2 right-0 min-w-40 p-2 bg-zinc-50/10 rounded-2xl ring-inset ring-1 ring-zinc-50/5 scale-90 isolate blur-sm opacity-0 invisible transition-[opacity,transform,filter] md:static md:flex md:items-center md:mt-0 md:opacity-100 md:blur-0 md:visible md:scale-100 backdrop-blur-2xl gap-5 justify-between">
        <ul>
          <li>
            <button className="hover:bg-gray-400 rounded-md">
              <Link href="/">Home</Link>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button className="hover:bg-gray-400 rounded-md">
              <Link href="/blog">Blog</Link>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button className="hover:bg-gray-400 rounded-md">
              <Link href="/categories">Categories</Link>
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button className="hover:bg-gray-400 rounded-md">
              <Link href="/about">About</Link>
            </button>
          </li>
        </ul>
      </nav>

      <button className="hover:bg-gray-400 rounded-md">
        <Link href="#contact">Contact Us</Link>
      </button>
    </header>
  );
}
