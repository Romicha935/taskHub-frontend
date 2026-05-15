"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, CheckSquare, Users, BarChart3, 
  Settings, LogOut, ShieldAlert, UserPlus 
} from "lucide-react";

const menuItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    roles: ["admin", "manager", "user"],
  },
  {
    title: "My Tasks",
    href: "/dashboard/tasks",
    icon: CheckSquare,
    roles: ["admin", "manager", "user"],
  },
  {
    title: "Team Management", // ম্যানেজার তার টিম মেম্বারদের এখানে হ্যান্ডেল করবে
    href: "/dashboard/team-management",
    icon: UserPlus,
    roles: ["admin", "manager"],
  },
  {
    title: "Analytics", // শুধুমাত্র অ্যাডমিন এবং ম্যানেজার দেখবে
    href: "/dashboard/analytics",
    icon: BarChart3,
    roles: ["admin", "manager"],
  },
  {
    title: "Admin Control", // শুধুমাত্র অ্যাডমিন টিম ক্রিয়েট করতে পারবে
    href: "/dashboard/admin-control",
    icon: ShieldAlert,
    roles: ["admin"],
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
    roles: ["admin", "manager", "user"],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  
  // ডামি রোল: ইন্টারভিউতে দেখানোর জন্য আপনি এটি চেঞ্জ করে টেস্ট করতে পারেন
  const userRole = "manager"; 

  return (
    <aside className="w-72 bg-white border-r border-gray-100 hidden md:flex flex-col h-screen sticky top-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      
      {/* Brand Logo */}
      <div className="h-24 flex items-center px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 rounded-[14px] flex items-center justify-center text-white font-black shadow-lg shadow-blue-100 group-hover:scale-110 transition-all">
            TH
          </div>
          <h2 className="text-2xl font-black text-gray-900 tracking-tighter leading-none">
            Task<span className="text-blue-600">Hub.</span>
          </h2>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
        <p className="px-4 mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          Main Menu
        </p>

        {menuItems.map((item) => {
     
          if (!item.roles.includes(userRole)) return null;

          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-[22px] transition-all duration-300 font-bold text-sm group
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xl shadow-blue-200/50"
                    : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                }`}
            >
              <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-blue-600"}`} />
              <span>{item.title}</span>
              {isActive && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full shadow-sm animate-pulse"></div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile Section */}
      <div className="p-4 border-t border-gray-50 bg-gray-50/20">
        <div className="flex items-center gap-3 p-3 mb-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black">
            {/* {userRole === "admin" ? "AD" : "MA"} */}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-black text-gray-900 truncate uppercase">Roni Jenkins</p>
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md inline-block">
              {userRole}
            </p>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 w-full bg-red-50 hover:bg-red-600 text-red-600 hover:text-white py-3.5 rounded-2xl font-black text-sm transition-all duration-300 group shadow-sm active:scale-95">
          <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Logout
        </button>
      </div>
    </aside>
  );
}