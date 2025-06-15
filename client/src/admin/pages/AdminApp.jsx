import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminLayout from "../components/AdminLayout";
import AdminDashboard from "../pages/Dashboard";
import AdminAddProduct from "../pages/AdminAddProduct";
import ProductListPage from "../pages/ProductListPage"; 
import ProductEditPage from "../pages/ProductEditPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CategoriesPage from "../pages/CategoriesPage";


export default function AdminApp() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  if (!isLoggedIn || !isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="products/new" element={<AdminAddProduct />} />
        <Route path="products/edit/:id" element={<ProductEditPage />} />
        <Route path="products/detail/:id" element={<ProductDetailPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        {/* Optional: Fallback, falls Route nicht gefunden */}
        {/* <Route path="*" element={<Navigate to="dashboard" />} /> */}
      </Route>
    </Routes>
  );
}
