

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-gray-900">
            Task<span className="text-blue-600">Hub</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Features
          </Link>

          <Link
            href="#pricing"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Pricing
          </Link>

          <Link
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-medium transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden border border-gray-300 px-3 py-2 rounded-lg"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-700"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>

            <Link
              href="#pricing"
              className="text-sm font-medium text-gray-700"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>

            <Link
              href="/login"
              className="text-sm font-medium text-gray-700"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}