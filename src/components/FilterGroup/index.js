import React from "react";
import { MdAdd, MdDeleteOutline } from "react-icons/md";

// Components
import Filter from "../Filter";

const FilterGroup = ({
  rules,
  showDelete,
  config,
  handleDelete,
  onFilterChange,
  onFilterAdd,
  onFilterDelete
}) => {
  return (
    <div className="flex items-center gap-8 mb-3">
      <div className="bg-gray-800 flex-none w-220 p-4 rounded-md border border-gray-500">
        <div className="flex flex-col gap-2">
          {rules.map((rule, index) => (
            <>
              <Filter
                key={rule}
                rule={rule}
                config={config}
                onChange={onFilterChange}
                showFilterDelete={index !== 0}
                onDelete={onFilterDelete}
              />
            </>
          ))}
        </div>
        <button
          className="mt-2 text-base p-3 text-white rounded-full shadow-sm bg-primary-100 hover:bg-primary-200 hover:scale-110"
          onClick={() => onFilterAdd()}
        >
          <MdAdd />
        </button>
      </div>
      {showDelete && (
        <button
          className="text-xl p-3 text-white rounded-full shadow-sm bg-rose-800 hover:bg-rose-900 hover:scale-110"
          onClick={() => handleDelete(rules)}
        >
          <MdDeleteOutline />
        </button>
      )}
    </div>
  );
};

export default FilterGroup;
