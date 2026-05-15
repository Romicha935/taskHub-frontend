// app/signup/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    // এখানে API connect করবে পরে
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Create Account 🚀
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Start managing your tasks
        </p>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">

          <div className="grid grid-cols-2 gap-3">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}