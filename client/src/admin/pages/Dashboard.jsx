import React from 'react';
import { FiShoppingBag, FiUsers, FiPackage, FiDollarSign } from 'react-icons/fi';
import '../Styles/Dashboard.css';

const DashboardCard = ({ icon: Icon, title, value, trend }) => (
  <div className="dashboard-card">
    <div className="card-icon">
      <Icon size={24} />
    </div>
    <div className="card-content">
      <h3>{title}</h3>
      <p className="value">{value}</p>
      <span className={`trend ${trend > 0 ? 'positive' : 'negative'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
  </div>
);

export default function Dashboard() {
  // Beispieldaten (später durch echte API-Daten ersetzen)
  const stats = {
    totalSales: { value: "€24,509", trend: 12.5 },
    totalOrders: { value: "156", trend: 8.2 },
    totalProducts: { value: "1,245", trend: -2.4 },
    activeUsers: { value: "3,427", trend: 5.6 }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, Admin</p>
      </header>

      <div className="dashboard-stats">
        <DashboardCard 
          icon={FiDollarSign}
          title="Total Sales"
          value={stats.totalSales.value}
          trend={stats.totalSales.trend}
        />
        <DashboardCard 
          icon={FiShoppingBag}
          title="Total Orders"
          value={stats.totalOrders.value}
          trend={stats.totalOrders.trend}
        />
        <DashboardCard 
          icon={FiPackage}
          title="Total Products"
          value={stats.totalProducts.value}
          trend={stats.totalProducts.trend}
        />
        <DashboardCard 
          icon={FiUsers}
          title="Active Users"
          value={stats.activeUsers.value}
          trend={stats.activeUsers.trend}
        />
      </div>
    </div>
  );
}