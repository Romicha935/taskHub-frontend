// components/shared/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Task<span className="text-blue-600">Hub</span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-6">
              TaskHub is a modern SaaS platform to manage tasks,
              teams, and productivity in one place.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/signup">Get Started</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} TaskHub. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-gray-600">
            <Link href="#">Facebook</Link>
            <Link href="#">GitHub</Link>
            <Link href="#">LinkedIn</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}