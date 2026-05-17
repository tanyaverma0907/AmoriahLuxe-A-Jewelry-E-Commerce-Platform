import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const types = ["Rings", "Necklaces", "Earrings", "Bracelets"];

const TypeFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-2"
      >
        <span className="text-sm font-semibold text-[#4a3426]">
          Type
        </span>

        {open ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </button>

      {open && (
        <div className="flex flex-col gap-2 pt-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setFilters({ ...filters, type })}
              className={`text-left px-3 py-2 rounded-lg text-sm transition
              ${
                filters.type === type
                  ? "bg-[#d4a017] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeFilter;
