import React, { useEffect, useState } from "react";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Produkte aus localStorage holen
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Product List</h2>

      {products.length === 0 ? (
        <p>No products found. Please add some products.</p>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                {/* Bildvorschau (falls vorhanden) */}
                {product.imageFile ? (
                  <img
                    src={URL.createObjectURL(product.imageFile)}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                ) : (
                  <div
                    style={{
                      height: "200px",
                      backgroundColor: "#eee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    No image
                  </div>
                )}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text fw-bold">{product.price.toFixed(2)} €</p>
                  <p className="card-text">
                    <small className="text-muted">{product.category}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
