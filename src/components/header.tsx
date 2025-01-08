"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, Search, Trash } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      router.push(`/search?keyword=${searchTerm}`);
      setSearchTerm(""); // Kosongkan input setelah pencarian
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center justify-between z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 px-4 sm:px-8">
      {/* Background Overlay ketika menu dibuka */}
      <div
        className={`${
          isMenuOpen
            ? "translate-x-0 opacity-50"
            : "-translate-x-full opacity-0"
        } fixed inset-0 z-10 sm:hidden transition-all duration-500`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Logo */}
      <Image src="/logo.svg" alt="Logo" width={50} height={50} />

      {/* Navigasi Menu */}
      <nav
        className={`${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        } absolute top-full right-0 sm:static sm:flex sm:gap-8 sm:items-center sm:opacity-100 sm:translate-x-0 transition-all duration-500 bg-zinc-50/10 rounded-2xl ring-1 ring-zinc-50/5 p-4 sm:p-0`}
      >
        <ul>
          <li>
            <Link
              href="/"
              className="block hover:bg-gray-400 rounded-md p-2 sm:p-0"
            >
              Home
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="/blog"
              className="block hover:bg-gray-400 rounded-md p-2 sm:p-0"
            >
              Blog
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="/categories"
              className="block hover:bg-gray-400 rounded-md p-2 sm:p-0"
            >
              Categories
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="/about"
              className="block hover:bg-gray-400 rounded-md p-2 sm:p-0"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      {/* Tombol "Contact Us" */}
      <button className="hidden sm:block hover:bg-gray-400 rounded-md">
        <Link href="#contact">Contact Us</Link>
      </button>

      {/* Form Pencarian dan Menu Hamburger */}
      <div className="flex gap-5 items-center">
        {/* Pencarian */}
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
          <input
            id="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 rounded-full bg-secondary-grey px-4 py-2 text-sm font-light"
          />
          <button
            type="submit"
            className="grid h-10 w-10 place-items-center rounded-full bg-secondary-grey"
          >
            <Search size={18} color="grey" />
          </button>
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              className="grid h-10 w-10 place-items-center rounded-full bg-red-500 text-white"
            >
              <Trash size={18} />
            </button>
          )}
        </form>

        {/* Menu Hamburger */}
        <button className="sm:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu />
        </button>
      </div>
    </header>
  );
}
