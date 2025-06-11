// src/components/AdminLayout.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />
      <main style={{ marginLeft: "230px", marginRight: "80px", flexGrow: 1, padding: "2rem", backgroundColor: "#f8f9fa" }}>
        {children}
      </main>
    </div>
  );
}
