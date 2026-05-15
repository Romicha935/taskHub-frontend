"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, LayoutDashboard, Zap, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3 shadow-sm" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
            T
          </div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tighter">
            Task<span className="text-blue-600">Hub.</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            <Link href="#features" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Features
            </Link>
            <Link href="#pricing" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Pricing
            </Link>
            <Link href="/dashboard" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
          </div>

          <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors">
              Sign In
            </Link>
            <Link
              href="/signup"
              className="group bg-gray-900 hover:bg-blue-600 text-white px-6 py-3 rounded-[18px] text-sm font-bold transition-all shadow-md flex items-center gap-2 active:scale-95"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-900 focus:outline-none"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[72px] bg-white z-50 md:hidden transition-all duration-300 ease-in-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          <Link href="#features" className="text-2xl font-black text-gray-900 border-b pb-4 border-gray-50" onClick={() => setOpen(false)}>
            Features
          </Link>
          <Link href="#pricing" className="text-2xl font-black text-gray-900 border-b pb-4 border-gray-50" onClick={() => setOpen(false)}>
            Pricing
          </Link>
          <Link href="/login" className="text-2xl font-black text-gray-900 border-b pb-4 border-gray-50" onClick={() => setOpen(false)}>
            Login
          </Link>
          <Link
            href="/signup"
            className="w-full bg-blue-600 text-white px-5 py-5 rounded-[25px] text-xl font-black text-center shadow-xl shadow-blue-100"
            onClick={() => setOpen(false)}
          >
            Create Account
          </Link>
        </div>
      </div>
    </nav>
  );
}