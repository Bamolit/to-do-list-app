import { Plus, CornerDownLeft } from "lucide-react";
import { useState, SubmitEvent, ChangeEvent } from "react";

type TaskFormProps = {
  onCreateTask: (title: string) => void;
};

export const TaskForm = ({ onCreateTask }: TaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreateTask(taskTitle);
    setTaskTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex bg-[#F4F8F5] w-152 h-18.5 rounded-xl gap-2 p-2">
        <input
          id="new-task"
          required
          value={taskTitle}
          onChange={handleChange}
          className="w-113.5 bg-white h-14 rounded-xl px-4 text-sm text-[#213D35] "
          type="text"
          placeholder="Plan this week's projects"
        />

        <button className="cursor-pointer bg-[#236B53] h-14 w-32 rounded-xl text-white gap-2 flex items-center justify-center text-sm">
          <Plus size={14} />
          Add task
        </button>
      </div>
      <div className="flex gap-1.5 justify-end mt-3 text-[#7A8881] text-xs items-center">
        <CornerDownLeft size={12} />
        Enter to add a task
      </div>
    </form>
  );
};
