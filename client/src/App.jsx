import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

// Seiten & Komponenten (Client)
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from "./pages/ProductDetailPage";
import Header from './components/Header';
import Footer from './components/Footer';
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from './pages/CartPage';
import CheckoutPage from "./pages/CheckoutPage";  
import LoadingPage from "./pages/LoadingPage";  
import ThankYouPage from "./pages/ThankYouPage";
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import LogoutLoadingPage from './pages/LogoutLoadingPage';
import LoginLoadingPage from './pages/LoginPage';



export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Provider store={store}>
      <>
        <Header setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage searchQuery={searchQuery} />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route
            path="/dashboard"
            element={
              localStorage.getItem("isLoggedIn") === "true" ? (
                <DashboardPage />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout-loading" element={<LogoutLoadingPage />} />
          <Route path="/login-loading" element={<LoginLoadingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />

        </Routes>
        <Footer />
      </>
    </Provider>
  );
}