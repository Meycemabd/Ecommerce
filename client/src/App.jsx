import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

// Seiten (Client)
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoadingPage from './pages/LoadingPage';
import ThankYouPage from './pages/ThankYouPage';
import LoginPage from './pages/LoginPage';
import LogoutLoadingPage from './pages/LogoutLoadingPage';
import RegisterPage from './pages/RegisterPage';
import RegisteredSuccessPage from './pages/RegisteredSuccessPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Dashboard from './pages/DashboardPage';

// Layout
import Header from './components/Header';
import Footer from './components/Footer';

// Admin
import AdminApp from './admin/pages/AdminApp';

function AppContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {/* Header & Footer nur auf Client-Seiten anzeigen */}
      {!path.startsWith('/admin') && (
        <Header setSearchQuery={setSearchQuery} />
      )}

      <Routes>
        {/* Client-Routen */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage searchQuery={searchQuery} />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/logout-loading" element={<LogoutLoadingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registered-success" element={<RegisteredSuccessPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Admin-Bereich */}
        <Route
          path="/admin/*"
          element={isLoggedIn && isAdmin ? <AdminApp /> : <Navigate to="/" />}
        />
      </Routes>

      {/* Footer nur auf Client-Seiten anzeigen */}
      {!path.startsWith('/admin') && <Footer />}

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
}

export default AppContent;
