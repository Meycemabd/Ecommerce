// src/components/AdminLayout.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div>
      <AdminSidebar />
      <div style={{ marginLeft: "240px" }}> {/* Platz für Sidebar */}
        <AdminNavbar />
        <main
          style={{
            marginTop: "80px", // Platz für Navbar
            padding: "2rem",
            backgroundColor: "#f8f9fa",
            minHeight: "calc(100vh - 80px)",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
