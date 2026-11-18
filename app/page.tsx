"use client";
import { useState } from "react";
import { TaskHeader, TaskFilters, TaskForm, TaskList } from "@/components";
import { Task } from "@/types";

export default function Home() {
  const [tasks, setTask] = useState<Task[]>([]);
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
          <TaskFilters />
        </div>
        <div className="border border-[#E9EEEB] mt-3"></div>
        <div>
          <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    </main>
  );
}
