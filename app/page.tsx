"use client";
import { useState } from "react";
import { TaskHeader, TaskFilters, TaskForm, TaskList } from "@/components";
import { FilterType, Task } from "@/types";
import { log } from "console";

export default function Home() {
  const [tasks, setTask] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>("All");

  const createTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTask((current) => [newTask, ...current]);
  };
  const deleteTask = (id: string) => {
    setTask((current) => current.filter((task) => task.id !== id));
  };
  const toggleTask = (id: string) => {
    setTask((current) => current.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };
  const visibleTask = tasks.filter((task) => filter === "All" || (filter === "Active" ? !task.completed : task.completed));
  return (
    <main className="flex items-center justify-center m-auto bg-[#EAF0EB] h-screen w-full">
      <div className="bg-[#FFFFFF] w-168 flex-col flex p-8 rounded-3xl">
        <div>
          <TaskHeader />
        </div>
        <div className="mt-6">
          <TaskForm onCreateTask={createTask} />
        </div>
        <div>
          <TaskFilters filter={filter} onFilter={setFilter} tasks={visibleTask} />
        </div>
        <div className="border border-[#E9EEEB] mt-3"></div>
        <div>
          <TaskList tasks={visibleTask} onDelete={deleteTask} onToggle={toggleTask} hasTasks={tasks.length > 0} />
        </div>
      </div>
    </main>
  );
}
