import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

export default function AdminApp() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route
        path="dashboard"
        element={
          isLoggedIn && isAdmin ? (
            <AdminDashboard />
          ) : (
            <Navigate to="/admin/login" replace state={{ from: location }} />
          )
        }
      />
      <Route path="*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
}
