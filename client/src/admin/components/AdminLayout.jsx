import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

export default function AdminLayout() {
  return (
    <div>
      <AdminSidebar />
      <div style={{ marginLeft: "240px" }}>
        <AdminNavbar />
        <main style={{
          marginTop: "80px",
          padding: "2rem",
          backgroundColor: "#f8f9fa",
          minHeight: "calc(100vh - 80px)",
        }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
