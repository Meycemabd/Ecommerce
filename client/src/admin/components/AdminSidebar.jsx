import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPlusCircle,
  FiTag,
  FiShoppingBag,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiGrid
} from "react-icons/fi";
import Logo from "../components/Logo";
import "../Styles/AdminSidebar.css";

export default function AdminSidebar() {
  return (
    <aside className="sidebar-minimal">
      <div className="logo">
        <Logo />
      </div>

      <nav className="nav-menu">
        {/* Dashboard */}
        <NavLink 
          to="/admin/dashboard" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <FiHome />
          <span className="link-text">Dashboard</span>
        </NavLink>

        {/* Products Group */}
        <div className="nav-group">
          <NavLink 
            to="/admin/products"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiGrid />
            <span className="link-text">Products</span>
          </NavLink>

          <NavLink 
            to="/admin/products/new" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiPlusCircle />
            <span className="link-text">Add Product</span>
          </NavLink>
            
          <NavLink 
            to="/admin/categories" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiTag />
            <span className="link-text">Categories</span>
          </NavLink>
        </div>

        {/* Orders */}
        <NavLink 
          to="/admin/orders" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <FiShoppingBag />
          <span className="link-text">Orders</span>
        </NavLink>

        {/* Users */}
        <NavLink 
          to="/admin/users" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <FiUsers />
          <span className="link-text">Users</span>
        </NavLink>

        {/* Reports */}
        <NavLink 
          to="/admin/statistics" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <FiBarChart2 />
          <span className="link-text">Reports</span>
        </NavLink>
      </nav>

      {/* Settings Footer */}
      <div className="sidebar-footer">
        <NavLink 
          to="/admin/settings" 
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          <FiSettings />
          <span className="link-text">Settings</span>
        </NavLink>
      </div>
    </aside>
  );
}