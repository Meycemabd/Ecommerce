import React, { useEffect, useState } from 'react';
import { 
  FiPackage, 
  FiShoppingBag, 
  FiDollarSign, 
  FiTrendingUp,
  FiGrid,
  FiClock,
  FiAlertCircle
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../Styles/Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalCategories: 0,
    totalValue: 0,
    lowStockProducts: [],
    latestProducts: [],
    categoryDistribution: [],
    recentActivity: []
  });

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const categories = JSON.parse(localStorage.getItem('categories')) || [];

    // Calculate total inventory value
    const totalValue = products.reduce((sum, product) => 
      sum + (Number(product.price) || 0), 0);

    // Get products with low stock (example threshold: 5)
    const lowStockProducts = products.filter(product => 
      (Number(product.stock) || 0) <= 5);

    // Latest products
    const latestProducts = [...products]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 5);

    // Category distribution
    const categoryDistribution = categories.map(category => ({
      name: category.name,
      count: products.filter(product => product.category === category.name).length
    }));

    setStats({
      totalProducts: products.length,
      totalCategories: categories.length,
      totalValue,
      lowStockProducts,
      latestProducts,
      categoryDistribution
    });
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="date-display">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-icon">
            <FiPackage />
          </div>
          <div className="stat-details">
            <h3>Total Products</h3>
            <p className="stat-value">{stats.totalProducts}</p>
            <Link to="/admin/products" className="stat-link">View all products</Link>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-icon">
            <FiGrid />
          </div>
          <div className="stat-details">
            <h3>Categories</h3>
            <p className="stat-value">{stats.totalCategories}</p>
            <Link to="/admin/categories" className="stat-link">Manage categories</Link>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-icon">
            <FiDollarSign />
          </div>
          <div className="stat-details">
            <h3>Total Inventory Value</h3>
            <p className="stat-value">€{stats.totalValue.toFixed(2)}</p>
            <span className="stat-subtitle">Based on current prices</span>
          </div>
        </div>

        <div className="stat-card danger">
          <div className="stat-icon">
            <FiAlertCircle />
          </div>
          <div className="stat-details">
            <h3>Low Stock Alert</h3>
            <p className="stat-value">{stats.lowStockProducts.length}</p>
            <span className="stat-subtitle">Products need attention</span>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-header">
            <h2>Latest Products</h2>
            <Link to="/admin/products/new" className="add-product-btn">
              <FiPackage /> Add Product
            </Link>
          </div>
          <div className="product-list">
            {stats.latestProducts.map(product => (
              <div key={product.id} className="product-item">
                <img 
                  src={product.imageFile} 
                  alt={product.title} 
                  className="product-thumb"
                />
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <p className="product-category">{product.category}</p>
                  <p className="product-price">€{Number(product.price).toFixed(2)}</p>
                </div>
                <Link 
                  to={`/admin/products/edit/${product.id}`} 
                  className="edit-link"
                >
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Category Distribution</h2>
          <div className="category-distribution">
            {stats.categoryDistribution.map(category => (
              <div key={category.name} className="distribution-item">
                <div className="distribution-info">
                  <span className="distribution-label">{category.name}</span>
                  <span className="distribution-value">{category.count}</span>
                </div>
                <div className="distribution-bar">
                  <div 
                    className="distribution-fill"
                    style={{ 
                      width: `${(category.count / stats.totalProducts * 100) || 0}%`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}