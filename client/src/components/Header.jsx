import React, { useState, useRef, useEffect } from 'react';
import { Home, ShoppingBag, Search, User, X, Heart, Check, LogOut } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import "../styles/componentCSS/Header.css";

export default function Header({ setSearchQuery }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const user = useSelector((state) => state.auth.user);
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
    dispatch(logout());
    navigate('/');
  };

  const handleAccountClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  };

  const getAccountLabel = () => {
    if (!isLoggedIn) return 'Login';
    return user?.role === 'admin' ? 'Admin' : 'Account';
  };

  return (
    <header className="main-header d-flex justify-content-between align-items-center px-4 py-3 shadow-sm bg-white fixed-top">
      <div className="logo-text">
        <Link to="/">Eyou.Store</Link>
      </div>

      <nav className="flex-grow-1">
        <ul className={`nav-links list-unstyled d-flex align-items-center mb-0 ${
          searchOpen ? 'search-active justify-content-center' : 'justify-content-end'
        }`}>
          <li className="mx-3 text-center">
            <Link to="/products" className="nav-icon text-decoration-none d-flex flex-column align-items-center">
              <Home size={24} strokeWidth={1.5} />
              <small className="nav-label">Home</small>
            </Link>
          </li>

          <li className="mx-3 text-center">
            <button
              onClick={() => setSearchOpen(prev => !prev)}
              className="nav-icon d-flex flex-column align-items-center"
            >
              {searchOpen ? <X size={24} strokeWidth={1.5} /> : <Search size={24} strokeWidth={1.5} />}
              <small className="nav-label">{searchOpen ? 'Close' : 'Search'}</small>
            </button>
          </li>

          <li className="mx-3 text-center position-relative">
            <Link to="/favorites" className="nav-icon text-decoration-none d-flex flex-column align-items-center">
              <Heart size={24} strokeWidth={1.5} />
              <small className="nav-label">Favorites</small>
              {favoriteCount > 0 && (
                <span className="badge bg-danger rounded-circle badge-position">
                  {favoriteCount}
                </span>
              )}
            </Link>
          </li>

          <li className="mx-3 text-center position-relative">
            <Link to="/cart" className="nav-icon text-decoration-none d-flex flex-column align-items-center">
              <ShoppingBag size={24} strokeWidth={1.5} />
              <small className="nav-label">Cart</small>
              {cartCount > 0 && (
                <span className="badge bg-dark rounded-circle badge-position">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>

          <li className="mx-3 text-center position-relative">
            <button
              onClick={handleAccountClick}
              className="nav-icon d-flex flex-column align-items-center bg-transparent border-0"
            >
              <div className="position-relative">
                <User size={24} strokeWidth={1.5} />
                {isLoggedIn && (
                  <Check
                    size={14}
                    strokeWidth={3}
                    color="green"
                    className="position-absolute badge-checkmark"
                  />
                )}
              </div>
              <small className="nav-label">{getAccountLabel()}</small>
            </button>
          </li>

          {isLoggedIn && (
            <li className="mx-3 text-center">
              <button
                onClick={handleLogout}
                className="nav-icon d-flex flex-column align-items-center text-danger bg-transparent border-0"
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
        />
      </div>
    </header>
  );
}