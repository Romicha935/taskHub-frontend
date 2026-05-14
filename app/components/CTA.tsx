

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Box */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-14 text-center shadow-2xl">

          {/* Glow circles */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>

          {/* Content */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Start Managing Your Tasks Smarter Today 🚀
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Join thousands of teams already using TaskHub to manage projects,
            track tasks, and boost productivity.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/signup"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
            >
              Get Started Free
            </Link>

            <Link
              href="/login"
              className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Login
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}