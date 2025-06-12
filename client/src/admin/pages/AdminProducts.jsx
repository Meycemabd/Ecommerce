// src/admin/AdminProducts.jsx
import React from "react";
import AdminLayout from "../components/AdminLayout";

export default function AdminProducts() {
  // Später kommen hier echte Produkte rein
  const products = [
    { id: 1, name: "Oversized T-Shirt", price: 19.99 },
    { id: 2, name: "Slim Fit Jeans", price: 49.95 },
    { id: 3, name: "Lederjacke", price: 129.00 },
  ];

  return (
    <AdminLayout>
      <div>
        <h2 className="mb-4 fw-light" style={{ letterSpacing: "1px" }}>
          Produktverwaltung
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered shadow-sm rounded-4">
            <thead className="table-light text-muted">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Preis</th>
                <th>Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price.toFixed(2)} €</td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-2">
                      Bearbeiten
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Löschen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}
