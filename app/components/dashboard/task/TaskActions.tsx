"use client";
import { Edit2, Trash2, CheckCircle, MoreVertical } from "lucide-react";
import { useState } from "react";

export function TaskActions() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setShow(!show)}
        className="p-2 text-gray-300 hover:text-gray-900 transition-colors"
      >
        <MoreVertical className="w-5 h-5" />
      </button>

      {show && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setShow(false)}></div>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-50 z-20 overflow-hidden p-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all">
              <Edit2 className="w-4 h-4" /> Edit Task
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all">
              <CheckCircle className="w-4 h-4" /> Mark Done
            </button>
            <div className="h-[1px] bg-gray-50 my-1"></div>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all">
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}