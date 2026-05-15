"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-4 md:p-10">
      <div 
        className="max-w-7xl w-full grid md:grid-cols-2 bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100"
        data-aos="zoom-in"
      >
        
        {/* Left Side: Image/Branding Section */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-white relative">
          <div className="absolute top-10 left-10">
            <h1 className="text-2xl font-bold tracking-tight">TaskHub.</h1>
          </div>
          
          <div data-aos="fade-right" data-aos-delay="300" className="text-center">
            <img 
              src="https://illustrations.popsy.co/white/abstract-art-4.svg" 
              alt="Signup Illustration" 
              className="w-80 h-80 mb-8 object-contain"
            />
            <h3 className="text-3xl font-bold mb-4">Manage tasks like a pro</h3>
            <p className="text-blue-100 text-lg">
              Join thousands of teams who simplify their workflow with TaskHub.
            </p>
          </div>

          <div className="absolute bottom-10 flex gap-4 opacity-50">
            <div className="w-12 h-1 bg-white rounded-full"></div>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
            <div className="w-12 h-1 bg-white/30 rounded-full"></div>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="p-8 md:p-16   flex flex-col justify-center">
          <div data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              Create Account 
            </h2>
            <p className="text-gray-500 mb-10">
              Please enter your details to get started.
            </p>

            <form onSubmit={handleSignup} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1 ">First Name</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Last Name</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

            
     

<Link href="/login">
  <button
    type="button"
    className="w-full bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 hover:scale-105 duration-300 text-white py-4 rounded-2xl font-bold cursor-pointer text-lg transition-all transform active:scale-[0.98] mt-4"
  >
    Get Started
  </button>
</Link>
            </form>

            <p className="text-center text-gray-500 mt-10">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 font-bold hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}