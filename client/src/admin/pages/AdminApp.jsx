import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import AdminDashboard from './pages/Dashboard';
import AdminLogin from './pages/Login';

export default function AdminApp() {
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; 

  return (
    <div className="admin-wrapper d-flex">
      <AdminSidebar />
      <div className="admin-main flex-grow-1">
        <AdminHeader />
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin/login" />} />
        </Routes>
      </div>
    </div>
  );
}
