// src/admin/AdminDashboard.jsx
import React from "react";
import AdminLayout from "../components/AdminLayout";
import { useSelector } from "react-redux";

export default function AdminDashboard() {
  const orders = useSelector((state) => state.order.orders);

  return (
    <AdminLayout>
      <div className="text-center">
        <h2
          className="fw-light"
          style={{ letterSpacing: "2px", fontFamily: "Arial, sans-serif" }}
        >
          Willkommen im Admin-Bereich 👋
        </h2>
        <p className="text-muted mt-2">
          Hier kannst du deine Fashion-Produkte verwalten
        </p>
      </div>

      {/* Statistik-Karten */}
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-sm rounded-4 p-3">
            <h5>Produkte</h5>
            <p className="text-muted">150 gelistet</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm rounded-4 p-3">
            <h5>Bestellungen</h5>
            <p className="text-muted">45 offen</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm rounded-4 p-3">
            <h5>Benutzer</h5>
            <p className="text-muted">73 registriert</p>
          </div>
        </div>
      </div>

      {/* Tabelle: Letzte Bestellungen */}
      <div className="mt-5">
        <h4 className="mb-3">Letzte Bestellungen</h4>
        <div className="table-responsive">
          <table className="table table-bordered shadow-sm rounded-4">
            <thead className="table-light text-muted">
              <tr>
                <th>Bestell-ID</th>
                <th>Kunde</th>
                <th>Betrag</th>
                <th>Datum</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order, i) => (
                <tr key={i}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.totalPrice.toFixed(2)} €</td>
                  <td>{order.date}</td>
                  <td>
                    <span
                      className={`badge rounded-pill ${
                        order.status === "Bezahlt"
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {order.status}
                    </span>
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
