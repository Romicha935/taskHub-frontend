import { ClipboardList } from "lucide-react";

export default function EmptyTaskState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-gray-50/50 rounded-[40px] border-2 border-dashed border-gray-200">
      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
        <ClipboardList className="w-8 h-8 text-gray-300" />
      </div>
      <h3 className="text-xl font-black text-gray-900">No tasks for today!</h3>
      <p className="text-gray-400 font-medium mt-1 text-sm">Take a break or create a new task to start.</p>
    </div>
  );
}