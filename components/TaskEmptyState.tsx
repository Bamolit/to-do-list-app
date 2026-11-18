import React from "react";
import { Check } from "lucide-react";

export const TaskEmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-15 mb-15">
      <div className="w-14 h-14 rounded-full bg-[#F0F6F2] flex items-center justify-center text-[#6C9B82]">
        <Check />
      </div>
      <div className="text-[#304C3E] text-4 mt-2">Your list starts here</div>
      <div className="text-[#7A8881] text-sm mt-2">Add your first task above.</div>
    </div>
  );
};
