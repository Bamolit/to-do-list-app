import { Task } from "@/types";
import { Trash, Check } from "lucide-react";

type TaskItemProps = {
  task: Task;
  onDelete: (id: string) => void;
};

export const TaskItem = ({ task, onDelete }: TaskItemProps) => {
  const handleDelete = () => {
    onDelete(task.id);
  };
  return (
    <div className="w-full rounded-xl flex justify-between items-center hover:bg-[#F8FAF8] p-3 h-13">
      <div className="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" className="peer appearance-none w-5 h-5 rounded-full border-2 border-gray-400 checked:bg-green-600 checked:border-green-600" />

        <Check size={14} className="absolute ml-1 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />

        <div className="text-[#30483C] text-sm transition-all peer-checked:text-[#93A198] peer-checked:line-through">{task.title}</div>
      </div>

      <button onClick={handleDelete} type="button" className="group flex items-center justify-center rounded-xl p-2 hover:bg-red-100">
        <Trash size={15} className="text-[#93A198] group-hover:text-red-500" />
      </button>
    </div>
  );
};
