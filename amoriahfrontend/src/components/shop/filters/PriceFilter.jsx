import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const prices = [
  { label: "Under ₹500", value: "0-500" },
  { label: "₹500 - ₹1000", value: "500-1000" },
  { label: "₹1000+", value: "1000+" },
];

const PriceFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-2"
      >
        <span className="text-sm font-semibold text-[#4a3426]">
          Price
        </span>

        {open ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </button>

      {open && (
        <div className="flex flex-col gap-2 pt-2">
          {prices.map((price) => (
            <button
              key={price.value}
              onClick={() => setFilters({ ...filters, price: price.value })}
              className={`text-left px-3 py-2 rounded-lg text-sm transition
              ${
                filters.price === price.value
                  ? "bg-[#d4a017] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {price.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
