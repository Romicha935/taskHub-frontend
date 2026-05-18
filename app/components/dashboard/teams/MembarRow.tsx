/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {  Edit2, Trash2, Eye,  } from "lucide-react";
import { useState } from "react";
import MemberTasksDrawer from "./MembarTask";


export default function MemberRow({ name, email, role, initials, bgColor, tasks }: any) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <tr className="group hover:bg-gray-50/80 transition-all border-b border-gray-50 last:border-0">
        <td className="p-6">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-[18px] ${bgColor} text-white flex items-center justify-center font-black shadow-lg shadow-gray-100`}>
              {initials}
            </div>
            <div>
              <p className="font-black text-gray-900 leading-tight">{name}</p>
              <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">{email}</p>
            </div>
          </div>
        </td>

        <td className="p-6">
          <span className={`px-4 py-1.5 rounded-xl border text-[10px] font-black uppercase tracking-widest ${
            role === "Admin" ? "bg-green-50 text-green-600 border-green-100" : "bg-blue-50 text-blue-600 border-blue-100"
          }`}>
            {role}
          </span>
        </td>

        {/* Action Buttons */} 
        <td className="p-6">
          <div className="flex items-center justify-end gap-3">
            {/* Details Button */}
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
              title="View Tasks"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-2.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all">
              <Edit2 className="w-4 h-4" />
            </button>
            <button className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>

      {/* Drawer Component */}
      <MemberTasksDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        memberName={name}
        tasks={tasks} 
      />
    </>
  );
}