import {
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid/index.js";
import React from "react";

export interface SearchAndSortProps {
  onSearchChange: (searchValue: string) => void;
  onSortChange: (sortDirection: "asc" | "desc") => void;
  sortDirection: "asc" | "desc";
}

const SearchAndSort: React.FC<SearchAndSortProps> = ({
  onSearchChange,
  onSortChange,
  sortDirection,
}) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex border rounded overflow-hidden">
        <input
          type="text"
          className="px-4 py-2 text-black focus:outline-none"
          placeholder="Search articles..."
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <MagnifyingGlassIcon className="h-6 w-6 my-auto text-gray-500" />
      </div>

      <div className="flex gap-2 ml-2">
        <div className="text-black">Sort</div>
        <div className="flex">
          <button
            className={`${
              sortDirection === "asc" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => onSortChange("asc")}
          >
            <ChevronUpIcon className="h-6 w-6" />
          </button>
          <button
            className={`${
              sortDirection === "desc" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => onSortChange("desc")}
          >
            <ChevronDownIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndSort;
