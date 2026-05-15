"use client";

import AddTaskModal from "@/app/components/dashboard/task/AddTaskModal";
import EmptyTaskState from "@/app/components/dashboard/task/EmptyTaskState";
import TaskFilters from "@/app/components/dashboard/task/FilterdTsk";
import TaskCard from "@/app/components/dashboard/task/TaskCard";

import { Plus } from "lucide-react";
import { useState } from "react";

const myTasks = [
  { id: 1, title: "Design Landing Page for TaskHub", tag: "Design", deadline: "Today", priority: "High", comments: 12 },
  { id: 2, title: "API Integration for User Profile", tag: "Backend", deadline: "Tomorrow", priority: "Medium", comments: 5 },
  { id: 3, title: "Test Mobile Responsiveness", tag: "Frontend", deadline: "May 18", priority: "High", comments: 2 },
];

export default function TasksPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">My Tasks</h1>
          <p className="text-gray-500 font-medium">Manage and track your daily work progress.</p>
        </div>
      <button 
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 ... flex items-center gap-2"
      >
        <Plus className="w-5 h-5" /> Add Task
      </button>
      </div>

      {/* Filter Component */}
      <TaskFilters />

      {/* Tasks Grid */}
      {myTasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myTasks.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>
      ) : (
        <EmptyTaskState />
      )}

      <AddTaskModal
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}