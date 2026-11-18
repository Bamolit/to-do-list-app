import React, { useState } from "react";

export const TaskFilters = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="mt-7 flex justify-between">
      <div className="flex gap-3.5 text-sm text-[#7B8680]">
        {["All", "Active", "Completed"].map((tab) => (
          <div key={tab} onClick={() => setActiveTab(tab)} className={`relative cursor-pointer pb-2 transition-all ${activeTab === tab ? "text-[#236B53] " : "text-[#7B8680] "}`}>
            {tab}

            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#65766C] rounded-full" />}
          </div>
        ))}
      </div>

      <div className="bg-[#F0F4F1] w-4 h-6 rounded-xl text-[#65766C] text-sm flex items-center justify-center">0</div>
    </div>
  );
};
