"use client";
import { Users2, ArrowRight, UserCheck } from "lucide-react";

interface TeamCardProps {
  teamName: string;
  managerName: string;
  memberCount: number;
  activeTasks: number;
}

export default function AdminTeamCard({ teamName, managerName, memberCount, activeTasks }: TeamCardProps) {
  return (
    <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
          <Users2 className="w-7 h-7" />
        </div>
        <span className="bg-green-50 text-green-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
          Active Team
        </span>
      </div>

      <h3 className="text-2xl font-black text-gray-900 tracking-tight mb-2">{teamName}</h3>
      
      <div className="flex items-center gap-2 mb-8">
        <div className="w-5 h-5 bg-gray-100 rounded-md flex items-center justify-center">
          <UserCheck className="w-3 h-3 text-gray-400" />
        </div>
        <p className="text-xs font-bold text-gray-500">Manager: <span className="text-gray-900">{managerName}</span></p>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-50">
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Members</p>
          <p className="text-xl font-black text-gray-900">{memberCount}</p>
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Tasks</p>
          <p className="text-xl font-black text-gray-900">{activeTasks}</p>
        </div>
      </div>

      <button className="w-full mt-8 py-4 bg-gray-50 rounded-2xl text-xs font-black uppercase tracking-widest text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center gap-2">
        View Team Details <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}