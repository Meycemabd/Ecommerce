// src/admin/components/AdminLayout.jsx
import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout d-flex">
      <AdminSidebar />
      <div className="flex-grow-1">
        <AdminHeader />
        <main className="p-4" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
