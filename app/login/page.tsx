// app/login/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ email, password });

    // এখানে API connect করবে পরে
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border">

        <h2 className="text-3xl font-bold text-center text-gray-900">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to your TaskHub account
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              className="w-full mt-2 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-medium">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}