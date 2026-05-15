"use client";
import { Search, Filter } from "lucide-react";

export default function TaskFilters() {
  const tabs = ["All Tasks", "To-Do", "In Progress", "Completed"];
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-[25px] border border-gray-100 shadow-sm">
      <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
        {tabs.map((tab, i) => (
          <button key={tab} className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${i === 0 ? "bg-blue-600 text-white shadow-lg shadow-blue-100" : "text-gray-400 hover:bg-gray-50"}`}>
            {tab}
          </button>
        ))}
      </div>
      <div className="relative w-full md:w-64">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input type="text" placeholder="Find a task..." className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-blue-100 transition-all" />
      </div>
    </div>
  );
}