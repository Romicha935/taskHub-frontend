"use client";

import { Search, Bell, Calendar, ChevronDown, Plus } from "lucide-react";
import { useState, useEffect } from "react";

export default function TopBar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {

    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };
    // setCurrentTime(date.toLocaleDateString('en-US', options));
  }, []);

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40">
      
      {/* Left: Search Bar */}
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative w-full group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
          <input
            type="text"
            placeholder="Search tasks, teams or files..."
            className="w-full bg-gray-50/50 border-none rounded-[18px] py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all outline-none"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-6">
        
        {/* Date Display */}
        <div className="hidden lg:flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span className="text-xs font-black text-gray-600 uppercase tracking-tight">{currentTime}</span>
        </div>

        {/* Create Task Button (Quick Action) */}
        <button className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-[15px] text-sm font-bold shadow-lg shadow-blue-100 transition-all active:scale-95">
          <Plus className="w-4 h-4" />
          New Task
        </button>

        {/* Notification Bell */}
        <button className="relative p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
          <Bell className="w-5 h-5 text-gray-500 group-hover:text-blue-600" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </button>

        {/* Divider */}
        <div className="h-8 w-[1px] bg-gray-100 mx-1"></div>

        {/* Minimal User Action */}
        <button className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full border-2 border-blue-50 p-0.5 group-hover:border-blue-200 transition-all">
             {/* প্রোফাইল ইমেজ না থাকলে ইনিশিয়াল দেখা যাবে */}
            <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-inner">
              RJ
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
        </button>
      </div>
    </header>
  );
}