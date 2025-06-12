import React from "react";

export default function DashboardPage() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to your admin dashboard. Here you can manage products, orders, users and more.</p>

      {/* Beispielhafte Statistiken */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1, padding: "20px", background: "#f0f0f0", borderRadius: "8px" }}>
          <h3>Products</h3>
          <p>120</p>
        </div>
        <div style={{ flex: 1, padding: "20px", background: "#f0f0f0", borderRadius: "8px" }}>
          <h3>Orders</h3>
          <p>45</p>
        </div>
        <div style={{ flex: 1, padding: "20px", background: "#f0f0f0", borderRadius: "8px" }}>
          <h3>Users</h3>
          <p>78</p>
        </div>
      </div>
    </div>
  );
}
