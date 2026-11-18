import React from "react";
import { TaskItem } from "./TaskItem";
import { Task } from "@/types";

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: string) => void;
};

export const TaskList = ({ tasks, onDelete }: TaskListProps) => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} onDelete={onDelete} />;
      })}
    </div>
  );
};
