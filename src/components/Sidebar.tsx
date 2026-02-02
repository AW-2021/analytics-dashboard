import { ChevronRight } from "lucide-react";
import { SquareKanban } from "lucide-react";
import logo from "../assets/images/logo.svg";

interface SidebarProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isExpanded, setIsExpanded }: SidebarProps) => {
  return (
    <aside className="border-r border-gray flex flex-col gap-3.5">
      <div className="p-6 border-b border-gray relative">
        <div className={`flex gap-2 ${!isExpanded && "justify-center"}`}>
          <img src={logo} alt="Logo" loading="lazy" />
          {isExpanded && <p className="font-bold text-2xl">DataFlow</p>}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          aria-label="Toggle sidebar"
          aria-expanded={isExpanded}
          className="absolute -right-3 top-7 w-6 h-6 bg-white border border-gray rounded-full flex items-center justify-center"
        >
          <ChevronRight
            height={16}
            strokeWidth={2}
            className={`${isExpanded && "rotate-180"}`}
          />
        </button>
      </div>

      <div
        className={`flex flex-col items-center ${isExpanded ? "px-6" : "px-4"}`}
      >
        <div
          className={`w-full flex gap-3 p-2 rounded-sm bg-soft-green-t180 text-green-s40 ${!isExpanded && "justify-center"}`}
        >
          <SquareKanban className="rotate-180" />
          {isExpanded && <p className="font-medium">Analytics</p>}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
