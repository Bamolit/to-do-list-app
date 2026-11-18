import React from "react";
import { ListTodo } from "lucide-react";

export const TaskHeader = () => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-11 h-11 flex items-center justify-center bg-[#E5F2ED] rounded-xl">
        <ListTodo className="text-[#23735A]" />
      </div>
      <div className="text-2xl text-[#213D35]">My tasks.</div>
    </div>
  );
};
