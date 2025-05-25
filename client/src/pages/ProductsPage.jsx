import React, { useEffect, useState } from "react";
import "../styles/pagesCSS/Products.css";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading products:", err));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="carousel-heading">Shop the Collection</h2>

      <div className="row">
        {products.map(({ id, title, price, image }) => (
          <div key={id} className="col-lg-4 col-md-6 mb-4">
            <div className="carousel-card card d-flex flex-column justify-content-between h-100">
              <img src={image} alt={title} className="carousel-img card-img-top" />
              <div className="card-body text-center px-0 pt-3">
                <h5 className="carousel-title card-title fw-normal">{title}</h5>
                <p className="carousel-price">${price.toFixed(2)}</p>
                <button className="carousel-btn btn btn-outline-dark btn-sm mt-2 w-100 mx-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
