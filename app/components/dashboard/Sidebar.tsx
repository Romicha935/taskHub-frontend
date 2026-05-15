// components/dashboard/Sidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
  },
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: "📋",
  },
  {
    title: "Teams",
    href: "/dashboard/teams",
    icon: "👥",
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: "📊",
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: "⚙️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-white border-r hidden md:flex flex-col">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900">
          Task<span className="text-blue-600">Hub</span>
        </h2>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">

        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition font-medium
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="p-4 border-t">
        <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-3 rounded-2xl font-medium transition">
          Logout
        </button>
      </div>
    </aside>
  );
}