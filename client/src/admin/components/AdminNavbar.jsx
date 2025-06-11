// src/components/AdminNavbar.jsx
import React from "react";
import { Bell, User } from "lucide-react";

export default function AdminNavbar() {
  return (
    <nav
      style={{
        height: "80px", // ⬆️ Höher gemacht
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)", // Etwas mehr Schatten
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 2.5rem",
        position: "fixed",
        top: 0,
        left: "96px", // Platz für Sidebar!
        right: 0,
        zIndex: 998,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
        <Bell size={24} style={{ cursor: "pointer", color: "#5c677d" }} />
        <User size={24} style={{ cursor: "pointer", color: "#5c677d" }} />
      </div>
    </nav>
  );
}
