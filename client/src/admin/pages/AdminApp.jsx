// src/admin/pages/AdminApp.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminLayout from "../components/AdminLayout";
import AdminDashboard from "../pages/Dashboard";
import ProductsPage from "../pages/ProductsPage";
import AdminAddProduct from "../pages/AdminAddProduct";
import DashboardPage from "../pages/DashboardPage";

export default function AdminApp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/new" element={<AdminAddProduct />} />
        <Route path="dashboardpage" element={<DashboardPage />} />
        {/* <Route path="*" element={<Navigate to="dashboard" />} /> */}
      </Route>
    </Routes>
  );
}
