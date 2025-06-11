// src/admin/pages/ProductsPage.jsx
import React from "react";
import AdminLayout from "../../admin/components/AdminLayout";

// Beispiel-Produkte (Fake-Daten)
const fakeProducts = [
  { id: 1, name: "T-Shirt Schwarz", category: "Oberteile", price: 19.99 },
  { id: 2, name: "Jeans Blau", category: "Hosen", price: 49.99 },
  { id: 3, name: "Sneaker Weiß", category: "Schuhe", price: 89.99 },
];

export default function ProductsPage() {
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
              </tr>
            </thead>
            <tbody>
              {fakeProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price.toFixed(2)} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
