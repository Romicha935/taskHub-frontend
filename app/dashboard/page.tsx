"use client";

import { 
  Plus, 
  ArrowUpRight, 
  MoreHorizontal, 
  ListTodo, 
  Calendar, 
  Users2 
} from "lucide-react";

export default function DashboardOverview() {
  const userRole = "manager"; // 'admin', 'manager', 'user' চেঞ্জ করে ডিজাইন টেস্ট করতে পারেন

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      
      {/* 1. Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">
            Good Morning, Roni! 👋
          </h1>
          <p className="text-gray-500 font-bold mt-1 uppercase tracking-widest text-[10px]">
            Your workspace is <span className="text-green-600">Syncing</span> in real-time
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-5 py-3 rounded-2xl text-sm font-black shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Schedule
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95">
            <Plus className="w-5 h-5" /> New Task
          </button>
        </div>
      </div>

      {/* 2. Bento Grid Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Main Focus */}
        <div className="bg-blue-600 p-8 rounded-[40px] text-white flex flex-col justify-between shadow-xl shadow-blue-100 h-64">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <ListTodo className="w-6 h-6" />
            </div>
            <ArrowUpRight className="w-6 h-6 text-white/50" />
          </div>
          <div>
            <h3 className="text-5xl font-black mb-2 tracking-tighter">18</h3>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-[10px]">Tasks in Progress</p>
          </div>
        </div>

        {/* Card 2: Team Progress (Conditionally for Manager/Admin) */}
        <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm flex flex-col justify-between h-64 group hover:border-blue-600 transition-all cursor-default">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
              <Users2 className="w-6 h-6" />
            </div>
            <p className="text-green-600 font-black text-xs bg-green-50 px-2 py-1 rounded-lg">+12%</p>
          </div>
          <div>
            <h3 className="text-5xl font-black text-gray-900 mb-2 tracking-tighter">
                {/* {userRole === "user" ? "88%" : "12"} */}
            </h3>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                {/* {userRole === "user" ? "Your Efficiency" : "Team Members Active"} */}
            </p>
          </div>
        </div>

        {/* Card 3: Deadlines */}
        <div className="bg-gray-900 p-8 rounded-[40px] text-white flex flex-col justify-between h-64 shadow-xl shadow-gray-200">
           <div className="flex justify-between items-start">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-gray-900 bg-gray-700 flex items-center justify-center text-xs font-black">
                    {i === 3 ? "+5" : "U"+i}
                  </div>
                ))}
              </div>
              <button className="text-gray-500 hover:text-white"><MoreHorizontal /></button>
           </div>
           <div>
              <h3 className="text-2xl font-black mb-1 tracking-tight leading-none">Next Deadline</h3>
              <p className="text-blue-400 font-bold text-sm tracking-tight">Today, 05:00 PM</p>
           </div>
        </div>
      </div>

      {/* 3. Bottom Layout: Tasks & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Tasks List */}
        <div className="lg:col-span-8 bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">Active Tasks</h3>
            <button className="text-blue-600 font-black text-sm hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            <TaskRow title="Update SaaS Pricing Model" tag="Design" priority="High" />
            <TaskRow title="Fix Dashboard Mobile Responsive" tag="Frontend" priority="Medium" />
            <TaskRow title="API Documentation for Team" tag="Backend" priority="Low" />
          </div>
        </div>

        {/* System Activity (Sidebar style inside page) */}
        <div className="lg:col-span-4 bg-gray-50/50 p-8 rounded-[40px] border border-gray-100">
          <h3 className="text-xl font-black text-gray-900 tracking-tight mb-6">Activity</h3>
          <div className="space-y-6">
             <ActivityItem time="10m ago" text="Nikola moved Task Hub to Completed" />
             <ActivityItem time="1h ago" text="Arif assigned a new task to you" />
             <ActivityItem time="4h ago" text="System Update: v2.4.0 deployed" />
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Components
function TaskRow({ title, tag, priority }: { title: string, tag: string, priority: string }) {
  return (
    <div className="flex items-center justify-between p-5 rounded-[25px] hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 group">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-2xl border border-gray-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all">
          <input type="checkbox" className="w-5 h-5 accent-blue-600 rounded-lg cursor-pointer" />
        </div>
        <div>
          <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</p>
          <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md tracking-wider">{tag}</span>
        </div>
      </div>
      <div className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
        priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-500'
      }`}>
        {priority}
      </div>
    </div>
  );
}

function ActivityItem({ time, text }: { time: string, text: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]"></div>
      <div>
        <p className="text-sm font-bold text-gray-700 leading-tight">{text}</p>
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{time}</span>
      </div>
    </div>
  );
}