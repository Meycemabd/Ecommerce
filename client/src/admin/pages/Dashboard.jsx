// src/admin/AdminDashboard.jsx
import React from "react";
import AdminLayout from "../components/AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="text-center">
        <h2 className="fw-light" style={{ letterSpacing: "2px", fontFamily: "Arial, sans-serif" }}>
          Willkommen im Admin-Bereich 👋
        </h2>
        <p className="text-muted mt-2">Hier kannst du deine Fashion-Produkte verwalten</p>
      </div>

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
    </AdminLayout>
  );
}
