import React, { useMemo } from "react";
import FilterSidebar from "./filters/FilterSidebar";
import ProductGrid from "./products/ProductGrid";

const ShopLayout = ({
  products,
  loading,
  filters,
  setFilters,
  search,
}) => {

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {

      const matchType =
        !filters.type || product.type === filters.type;

      const matchMaterial =
        !filters.material || product.material === filters.material;

      const matchPrice =
        !filters.price ||
        (filters.price === "0-500" && product.price <= 500) ||
        (filters.price === "500-1000" &&
          product.price > 500 &&
          product.price <= 1000) ||
        (filters.price === "1000+" && product.price > 1000);

      const matchSearch =
        !search ||
        product.name.toLowerCase().includes(search.toLowerCase());

      return matchType && matchMaterial && matchPrice && matchSearch;
    });
  }, [products, filters, search]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10 bg-[#f8f5f2]">

      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#4a3426]">
          All Products
        </h2>

        <p className="text-sm text-gray-500">
          {filteredProducts.length} items
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        <aside className="lg:col-span-1">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
          />
        </aside>

        <div className="lg:col-span-4">
          <ProductGrid
            products={filteredProducts}
            loading={loading}
          />
        </div>

      </div>

    </section>
  );
};

export default ShopLayout;
