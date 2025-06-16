import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';
import AdminDashboard from '../pages/Dashboard';
import ProductListPage from '../pages/ProductListPage';
import AdminAddProduct from '../pages/AdminAddProduct';
import ProductDetailPage from './ProductDetailPage';
import CategoriesPage from './CategoriesPage';

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="products" element={<ProductListPage />} />
        <Route path="products/new" element={<AdminAddProduct />} />
        <Route path="products/detail/:id" element={<ProductDetailPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
      </Route>
    </Routes>
  );
}