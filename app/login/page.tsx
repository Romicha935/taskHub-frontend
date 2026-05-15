"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 md:p-10">
      <div 
        className="max-w-7xl w-full grid md:grid-cols-2 bg-white rounded-[45px] shadow-2xl overflow-hidden border border-gray-100"
        data-aos="fade-up"
      >
        
        {/* Left Side: Branding/Image Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-tr from-indigo-600 to-blue-500 p-12 text-white relative">
          <div className="absolute top-10 left-10">
            <h1 className="text-2xl font-bold tracking-tight">TaskHub.</h1>
          </div>
          
          <div data-aos="zoom-in-right" data-aos-delay="300" className="text-center">
            <img 
              src="https://illustrations.popsy.co/white/abstract-art-4.svg" 
              alt="Signup Illustration" 
              className="w-80 h-80 mb-8 object-contain"
            />
            <h3 className="text-3xl font-bold mb-4">Welcome Back!</h3>
            <p className="text-blue-100 text-lg max-w-sm">
              Log in to continue managing your workflow and staying productive.
            </p>
          </div>

          <div className="absolute bottom-12 flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="p-8  flex flex-col justify-center bg-white">
          <div data-aos="fadmd:p-16 lg:p-24e-left" data-aos-delay="400">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              Hello Again 👋
            </h2>
            <p className="text-gray-500 mb-10">
              Welcome back! Please enter your details.
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-semibold text-gray-700">Password</label>
                  <Link href="#" className="text-xs font-semibold text-blue-600 hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div className="flex items-center gap-2 px-1">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">Remember for 30 days</label>
              </div>
            
           <Link href="/dashboard">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-100 hover:scale-105 duration-300 cursor-pointer text-white py-4 rounded-2xl font-bold text-lg transition-all transform active:scale-[0.98] mt-2"
              >
                Sign In
              </button>
              </Link>
            </form>

            <p className="text-center text-gray-500 mt-10">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600 font-bold hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}