// src/admin/pages/AdminApp.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminLayout from "../components/AdminLayout";
import AdminDashboard from "../pages/Dashboard";
import ProductsPage from "../pages/ProductsPage";
import ProductNewPage from "../pages/ProductNewPage";

export default function AdminApp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/new" element={<ProductNewPage />} />
        {/* Fallback für ungültige Admin-Routen */}
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Route>
    </Routes>
  );
}
