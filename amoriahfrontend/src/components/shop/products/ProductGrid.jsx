import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
