import React, { useState, useRef, useEffect } from 'react';
import { Home, ShoppingBag, Search, User, X, Heart } from 'lucide-react';
import { useSelector } from 'react-redux';
import "../styles/componentCSS/Header.css";


export default function Header({ setSearchQuery }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const favoriteCount = useSelector((state) => state.favorites.length);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <header className="main-header d-flex justify-content-between align-items-center px-4 py-3 shadow-sm bg-white fixed-top">
      <div className="logo-text">
        <a href="/">Eyou.Store</a>
      </div>

      <nav className="flex-grow-1">
        <ul className={`nav-links list-unstyled d-flex align-items-center mb-0 ${searchOpen ? 'search-active justify-content-center' : 'justify-content-end'}`}>
          <li className="mx-3">
            <a href="/products" className="nav-icon text-decoration-none" aria-label="Home">
              <Home size={24} strokeWidth={1.5} />
            </a>
          </li>

          <li className="mx-3">
            <button
              onClick={() => setSearchOpen(prev => !prev)}
              className="nav-icon"
              aria-label={searchOpen ? "Close search" : "Open search"}
            >
              {searchOpen ? <X size={24} strokeWidth={1.5} /> : <Search size={24} strokeWidth={1.5} />}
            </button>
          </li>

          <li className="mx-3">
            <a href="/login" className="nav-icon text-decoration-none" aria-label="Login">
              <User size={24} strokeWidth={1.5} />
            </a>
          </li>

          <li className="mx-3 position-relative">
            <a href="/favorites" className="nav-icon text-decoration-none position-relative" aria-label="Favorites">
              <Heart size={24} strokeWidth={1.5} />
              {favoriteCount > 0 && (
                <span className="badge bg-danger text-white rounded-circle position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.7rem', minWidth: '18px', height: '18px', lineHeight: '18px', padding: '0 5px', textAlign: 'center' }}>
                  {favoriteCount}
                </span>
              )}
            </a>
          </li>

          <li className="mx-3">
            <a href="/cart" className="nav-icon text-decoration-none" aria-label="Cart">
              <ShoppingBag size={24} strokeWidth={1.5} />
            </a>
          </li>
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
