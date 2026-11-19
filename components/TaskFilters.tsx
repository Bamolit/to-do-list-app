import { FilterType } from "@/types";
import { Task } from "@/types";
const filters: FilterType[] = ["All", "Active", "Completed"];
type TaskFiltersProps = {
  tasks: Task[];
  filter: FilterType;
  onFilter: (filter: FilterType) => void;
};
export const TaskFilters = ({ filter, onFilter, tasks }: TaskFiltersProps) => {
  const handleClick = (filterValie: FilterType) => () => {
    onFilter(filterValie);
  };

  return (
    <div className="mt-7 flex justify-between">
      <div className="flex gap-3.5 text-sm text-[#7B8680]">
        {filters.map((tab) => (
          <button key={tab} onClick={handleClick(tab)} className={`relative cursor-pointer pb-2 transition-all ${filter === tab ? "text-[#236B53] " : "text-[#7B8680] "}`}>
            {tab}

            {filter === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#236B53] rounded-full" />}
          </button>
        ))}
      </div>

      <div className="bg-[#F0F4F1] w-4 h-6 rounded-xl text-[#65766C] text-sm flex items-center justify-center">{tasks.length}</div>
    </div>
  );
};
