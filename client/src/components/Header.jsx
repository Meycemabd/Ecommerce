// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Home, ShoppingBag, Search, User, X, Heart, Check, LogOut } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/componentCSS/Header.css";

export default function Header({ setSearchQuery }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const favoriteCount = useSelector((state) => state.favorites.length);
  const cartCount = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleLogout = () => {
    navigate('/logout-loading'); // Leitet zur Logout-Loading-Seite weiter
  };

  return (
    <header className="main-header d-flex justify-content-between align-items-center px-4 py-3 shadow-sm bg-white fixed-top">
      <div className="logo-text">
        <Link to="/">Eyou.Store</Link>
      </div>

      <nav className="flex-grow-1">
        <ul className={`nav-links list-unstyled d-flex align-items-center mb-0 ${searchOpen ? 'search-active justify-content-center' : 'justify-content-end'}`}>
          <li className="mx-3 text-center">
            <Link to="/products" className="nav-icon text-decoration-none d-flex flex-column align-items-center" aria-label="Home">
              <Home size={24} strokeWidth={1.5} />
              <small className="nav-label">Home</small>
            </Link>
          </li>

          <li className="mx-3 text-center">
            <button
              onClick={() => setSearchOpen(prev => !prev)}
              className="nav-icon d-flex flex-column align-items-center"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? <X size={24} strokeWidth={1.5} /> : <Search size={24} strokeWidth={1.5} />}
              <small className="nav-label">{searchOpen ? "Close" : "Search"}</small>
            </button>
          </li>

          <li className="mx-3 text-center position-relative">
            <Link to="/favorites" className="nav-icon text-decoration-none d-flex flex-column align-items-center" aria-label="Favorites">
              <Heart size={24} strokeWidth={1.5} />
              <small className="nav-label">Favorites</small>
              {favoriteCount > 0 && (
                <span className="badge bg-danger text-white rounded-circle position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.7rem', minWidth: '18px', height: '18px', lineHeight: '18px', padding: '0 5px', textAlign: 'center' }}>
                  {favoriteCount}
                </span>
              )}
            </Link>
          </li>

          <li className="mx-3 text-center position-relative">
            <Link to="/cart" className="nav-icon text-decoration-none d-flex flex-column align-items-center" aria-label="Cart">
              <ShoppingBag size={24} strokeWidth={1.5} />
              <small className="nav-label">Cart</small>
              {cartCount > 0 && (
                <span className="badge bg-dark text-white rounded-circle position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.7rem', minWidth: '18px', height: '18px', lineHeight: '18px', padding: '0 5px', textAlign: 'center' }}>
                  {cartCount}
                </span>
              )}
            </Link>
          </li>

          <li className="mx-3 text-center position-relative">
            <Link to={isLoggedIn ? "/dashboard" : "/login"} className="nav-icon text-decoration-none d-flex flex-column align-items-center" aria-label="Login">
              {isLoggedIn ? (
                <>
                  <User size={24} strokeWidth={1.5} />
                  <Check
                    size={14}
                    strokeWidth={3}
                    color="green"
                    className="position-absolute"
                    style={{
                      top: 0,
                      right: 0,
                      backgroundColor: 'white',
                      borderRadius: '50%',
                    }}
                  />
                </>
              ) : (
                <User size={24} strokeWidth={1.5} />
              )}
              <small className="nav-label">{isLoggedIn ? "Account" : "Login"}</small>
            </Link>
          </li>

          {isLoggedIn && (
            <li className="mx-3 text-center">
              <button
                onClick={handleLogout}
                className="nav-icon d-flex flex-column align-items-center text-danger bg-transparent border-0"
                aria-label="Logout"
              >
                <LogOut size={24} strokeWidth={1.5} />
                <small className="nav-label">Logout</small>
              </button>
            </li>
          )}
        </ul>
      </nav>

      <div className={`search-wrapper ${searchOpen ? 'active' : ''}`}>
        <input
          type="text"
          placeholder="Search products..."
          ref={inputRef}
          className="search-input form-control"
          onChange={handleSearchChange}
          aria-label="Search products"
        />
      </div>
    </header>
  );
}
