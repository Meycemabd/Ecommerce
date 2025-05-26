// ProductsPage.js
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Footer from '../components/Footer';
import "../styles/pagesCSS/Products.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) =>
        console.error("Error fetching products from Fake Store API:", error)
      );
  }, []);

  return (
    <>
      <div className="container my-5">
      <h2 className="ProductsPage-heading">New arrivals</h2>
      <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
