import React from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPlusCircle,
  FiTag,
  FiShoppingBag,
  FiClock,
  FiCheckCircle,
  FiUsers,
  FiUser,
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
            <span className="link-text">Add New</span>
          </NavLink>

          <NavLink 
            to="/admin/products/edit/1" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiSettings />
            <span className="link-text">Edit Product</span>
          </NavLink>

          <NavLink 
            to="/admin/products/detail/1" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiTag />
            <span className="link-text">Product Detail</span>
          </NavLink>

          <NavLink 
            to="/admin/categories" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiTag />
            <span className="link-text">Categories</span>
          </NavLink>
        </div>

        {/* Orders Group */}
        <div className="nav-group">
          <NavLink 
            to="/admin/orders" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiShoppingBag />
            <span className="link-text">Orders</span>
          </NavLink>

          <NavLink 
            to="/admin/orders/pending" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiClock />
            <span className="link-text">Pending</span>
          </NavLink>

          <NavLink 
            to="/admin/orders/completed" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiCheckCircle />
            <span className="link-text">Completed</span>
          </NavLink>
        </div>

        {/* Users Group */}
        <div className="nav-group">
          <NavLink 
            to="/admin/users" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiUsers />
            <span className="link-text">Users</span>
          </NavLink>

          <NavLink 
            to="/admin/users/roles" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            <FiUser />
            <span className="link-text">Roles</span>
          </NavLink>
        </div>

        {/* Reports */}
        <NavLink 
          to="/admin/reports" 
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
