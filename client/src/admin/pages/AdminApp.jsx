// src/AdminApp.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminDashboard from "./admin/pages/Dashboard";
import ProductsPage from "./admin/pages/ProductsPage";
import UsersPage from "./admin/pages/UsersPage";
import AdminLayout from "./components/AdminLayout";

export default function AdminApp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <AdminLayout>
      <Routes>
        {/* Weiterleitung von /admin-dashboard zu /admin/dashboard */}
        <Route path="/admin-dashboard" element={<Navigate to="/admin/dashboard" replace />} />

        {/* Admin Seiten */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/products" element={<ProductsPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
      </Routes>
    </AdminLayout>
  );
}
