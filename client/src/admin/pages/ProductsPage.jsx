// src/admin/pages/ProductsPage.jsx
import React, { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

// Ursprüngliche Daten (Fake-Produkte)
const initialProducts = [
  { id: 1, name: "T-Shirt Schwarz", category: "Oberteile", price: 19.99 },
  { id: 2, name: "Jeans Blau", category: "Hosen", price: 49.99 },
  { id: 3, name: "Sneaker Weiß", category: "Schuhe", price: 89.99 },
];

export default function ProductsPage() {
  // 🧠 Produkte werden nun im State verwaltet
  const [products, setProducts] = useState(initialProducts);

  // 🗑 Funktion zum Löschen eines Produkts
  const handleDelete = (id) => {
    const confirmed = window.confirm("Willst du dieses Produkt wirklich löschen?");
    if (confirmed) {
      const updatedProducts = products.filter((product) => product.id !== id);
      setProducts(updatedProducts);
    }
  };

  return (
    <AdminLayout>
      <div className="container mt-4">
        <h2 className="mb-4" style={{ letterSpacing: "1px" }}>
          Produkte verwalten
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered table-hover shadow-sm">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Kategorie</th>
                <th>Preis</th>
                <th>Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price.toFixed(2)} €</td>
                  <td>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Löschen
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    Keine Produkte vorhanden.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
