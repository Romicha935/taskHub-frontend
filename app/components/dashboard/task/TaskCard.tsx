"use client";

import { Clock, MessageSquare, MoreVertical, Edit2, Trash2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

interface TaskProps {
  title: string;
  deadline: string;
  tag: string;
  priority: string;
  comments: number;
}

export default function TaskCard({ title, deadline, tag, priority, comments }: TaskProps) {
  const [showOptions, setShowOptions] = useState(false);

  const priorityStyles = {
    High: "text-red-600 bg-red-50",
    Medium: "text-blue-600 bg-blue-50",
    Low: "text-gray-600 bg-gray-50",
  }[priority as 'High' | 'Medium' | 'Low'] || "text-gray-600 bg-gray-50";

  return (
    <div className="bg-white p-7 rounded-[35px] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group relative">
      
      {/* Top Section: Tag & Options */}
      <div className="flex justify-between items-start mb-5">
        <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-lg tracking-widest">
          {tag}
        </span>
        
        {/* Three Dot Options */}
        <div className="relative">
          <button 
            onClick={() => setShowOptions(!showOptions)}
            className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all"
          >
            <MoreVertical className="w-5 h-5" />
          </button>

          {/* Action Dropdown */}
          {showOptions && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowOptions(false)}></div>
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-[22px] shadow-2xl border border-gray-100 z-20 overflow-hidden p-2 animate-in fade-in zoom-in duration-200">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all">
                  <Edit2 className="w-4 h-4" /> Edit Task
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">
                  <CheckCircle2 className="w-4 h-4" /> Mark Done
                </button>
                <div className="h-[1px] bg-gray-50 my-1"></div>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Title */}
      <h4 className="text-xl font-black text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
        {title}
      </h4>

      {/* Priority & Meta */}
      <div className="flex items-center gap-3 mb-8">
        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${priorityStyles}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${priority === 'High' ? 'bg-red-600' : 'bg-blue-600'}`}></div>
          {priority} Priority
        </div>
      </div>

      {/* Bottom Footer: Stats & Assignee */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-gray-400">
            <Clock className="w-4 h-4 text-gray-300" />
            <span className="text-[10px] font-black uppercase tracking-tighter">{deadline}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <MessageSquare className="w-4 h-4 text-gray-300" />
            <span className="text-[10px] font-black uppercase tracking-tighter">{comments}</span>
          </div>
        </div>

        {/* Small Assignee Avatar (Bento Style) */}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-gray-200">
          RJ
        </div>
      </div>
    </div>
  );
}