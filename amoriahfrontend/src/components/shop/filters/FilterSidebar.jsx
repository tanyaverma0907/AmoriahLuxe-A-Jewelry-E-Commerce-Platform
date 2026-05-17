import React from "react";
import TypeFilter from "./TypeFilter";
import MaterialFilter from "./MaterialFilter";
import PriceFilter from "./PriceFilter";

const FilterSidebar = ({ filters, setFilters }) => {

  const clearFilters = () => {
    setFilters({
      type: "",
      material: "",
      price: "",
    });
  };

  return (
    <aside className="w-full bg-white rounded-2xl shadow-lg border border-gray-100 p-5 sticky top-24">

      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Filters
        </h2>

        <button
          onClick={clearFilters}
          className="text-xs text-gray-500 hover:text-black transition"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col divide-y">

        <div className="py-2">
          <TypeFilter filters={filters} setFilters={setFilters} />
        </div>

        <div className="py-2">
          <MaterialFilter filters={filters} setFilters={setFilters} />
        </div>

        <div className="py-2">
          <PriceFilter filters={filters} setFilters={setFilters} />
        </div>

      </div>

    </aside>
  );
};

export default FilterSidebar;
