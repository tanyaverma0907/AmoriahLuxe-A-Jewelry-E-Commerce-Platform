

import React, { useState } from "react";

const materials = [
  { label: "14k Gold", color: "#d4a017" },
  { label: "Vermeil", color: "#c9a86c" },
  { label: "Sterling Silver", color: "#a8a9ad" },
  { label: "Rose Gold", color: "#b76e79" },
];

const MaterialFilter = ({ filters, setFilters }) => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full py-1 group"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-[#4a3426] group-hover:text-[#d4a017] transition-colors">
          Material
        </span>
        <svg
          className={`w-3.5 h-3.5 text-[#c4b49a] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-72 pt-2" : "max-h-0"}`}>
        <div className="flex flex-col gap-1">
          {materials.map(({ label, color }) => {
            const active = filters.material === label;
            return (
              <button
                key={label}
                onClick={() => setFilters({ ...filters, material: active ? "" : label })}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-200
                  ${active
                    ? "bg-gradient-to-r from-[#d4a017] to-[#f0c93a] text-black font-semibold shadow-sm"
                    : "text-[#6b5744] hover:bg-[#faf5ee] hover:text-[#4a3426]"
                  }`}
              >
                {/* Color swatch */}
                <span
                  className="w-4 h-4 rounded-full border-2 shrink-0"
                  style={{
                    backgroundColor: color,
                    borderColor: active ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.08)",
                  }}
                />
                {label}
                {active && (
                  <svg className="ml-auto w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MaterialFilter;

