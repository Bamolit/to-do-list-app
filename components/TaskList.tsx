import React from "react";
import { TaskItem } from "./TaskItem";
import { Task } from "@/types";
import { TaskEmptyState } from "./TaskEmptyState";
type TaskListProps = {
  tasks: Task[];
  hasTasks: boolean;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export const TaskList = ({ tasks, onDelete, onToggle, hasTasks }: TaskListProps) => {
  if (!tasks.length) return <TaskEmptyState hasTasks={hasTasks} />;
  return (
    <div className="mt-4 flex flex-col gap-3">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />;
      })}
    </div>
  );
};
