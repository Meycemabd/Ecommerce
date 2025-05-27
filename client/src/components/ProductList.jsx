// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";
import "../styles/componentCSS/ProductList.css";

export default function ProductList({ products }) {
  return (
    <div className="row product-list">
      {products.map((product) => (
        <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
