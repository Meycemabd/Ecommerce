import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Produktliste</h2>
        <Link to="/admin/products/new" className="btn btn-primary">
          + Neues Produkt
        </Link>
      </div>

      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>Bild</th>
            <th>Titel</th>
            <th>Kategorie</th>
            <th>Preis</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.imageFile ? (
                  <img
                    src={product.imageFile}
                    alt="Produkt"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "0.5rem",
                      border: "1px solid #ddd",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      backgroundColor: "#eee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "0.5rem",
                      color: "#888",
                      fontSize: "12px",
                      border: "1px solid #ccc",
                    }}
                  >
                    Kein Bild
                  </div>
                )}
              </td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{parseFloat(product.price).toFixed(2)} €</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
