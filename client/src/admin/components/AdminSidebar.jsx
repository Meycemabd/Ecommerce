// src/admin/components/AdminSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <div className="admin-sidebar bg-dark text-white p-3" style={{ width: "220px", minHeight: "100vh" }}>
      <h5 className="text-uppercase mb-4" style={{ letterSpacing: "2px" }}>Admin</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/admin-dashboard" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-white">Produkte</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-white">Bestellungen</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-white">Benutzer</Link>
        </li>
      </ul>
    </div>
  );
}
