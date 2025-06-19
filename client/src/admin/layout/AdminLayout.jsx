// src/admin/layouts/AdminLayout.jsx
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminNavbar from '../components/AdminNavbar';
import '../../styles/admin/AdminLayout.css'; // falls nötig

export default function AdminLayout({ children }) {
  return (
    <div className="admin-layout d-flex">
      <AdminSidebar />
      <div className="flex-grow-1">
        <AdminNavbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
