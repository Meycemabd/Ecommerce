import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiClock, FiXCircle, FiEye, FiSearch } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import OrderDetailModal from '../components/OrderDetailModal';
import '../Styles/OrdersPage.css';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders.sort((a, b) => new Date(b.date) - new Date(a.date)));
  };

  const updateOrderStatus = (orderId, newStatus) => {
    try {
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { 
          ...order, 
          status: newStatus, 
          updatedAt: new Date().toISOString() 
        } : order
      );
      
      setOrders(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      toast.success(`Order #${orderId} marked as ${newStatus}`);
      setIsModalOpen(false);
    } catch (error) {
      toast.error('Error updating order status');
    }
  };

  const handleViewDetail = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const getStatusBadgeClass = (status) => {
    switch(status) {
      case 'completed': return 'status-badge completed';
      case 'pending': return 'status-badge pending';
      case 'cancelled': return 'status-badge cancelled';
      default: return 'status-badge';
    }
  };

  const filteredOrders = orders
    .filter(order => filter === 'all' ? true : order.status === filter)
    .filter(order => 
      searchTerm === '' ? true : 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    completed: orders.filter(o => o.status === 'completed').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
    totalValue: orders.reduce((sum, order) => sum + order.total, 0)
  };

  return (
    <div className="orders-page">
      <ToastContainer />
      
      <div className="orders-header">
        <div className="header-title">
          <h1>Orders Management</h1>
          <p>{stats.total} orders total</p>
        </div>

        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="orders-stats">
        <div className="stat-card total">
          <h3>Total Value</h3>
          <p>€{stats.totalValue.toFixed(2)}</p>
          <span>All time earnings</span>
        </div>
        <div className="stat-card pending">
          <h3>Pending</h3>
          <p>{stats.pending}</p>
          <span>Awaiting action</span>
        </div>
        <div className="stat-card completed">
          <h3>Completed</h3>
          <p>{stats.completed}</p>
          <span>Successfully delivered</span>
        </div>
        <div className="stat-card cancelled">
          <h3>Cancelled</h3>
          <p>{stats.cancelled}</p>
          <span>Order issues</span>
        </div>
      </div>

      <div className="orders-filter-bar">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Orders
          </button>
          <button 
            className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            <FiClock /> Pending
          </button>
          <button 
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            <FiCheckCircle /> Completed
          </button>
          <button 
            className={`filter-btn ${filter === 'cancelled' ? 'active' : ''}`}
            onClick={() => setFilter('cancelled')}
          >
            <FiXCircle /> Cancelled
          </button>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id}>
                <td className="order-id">#{order.id}</td>
                <td className="customer-name">{order.customerName}</td>
                <td>{order.items.length} items</td>
                <td className="order-total">€{order.total.toFixed(2)}</td>
                <td>{new Date(order.date).toLocaleDateString()}</td>
                <td>
                  <span className={getStatusBadgeClass(order.status)}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <div className="order-actions">
                    <button
                      className="action-btn view"
                      onClick={() => handleViewDetail(order)}
                      title="View Details"
                    >
                      <FiEye />
                    </button>
                    {order.status === 'pending' && (
                      <>
                        <button
                          className="action-btn complete"
                          onClick={() => updateOrderStatus(order.id, 'completed')}
                          title="Mark as Completed"
                        >
                          <FiCheckCircle />
                        </button>
                        <button
                          className="action-btn cancel"
                          onClick={() => updateOrderStatus(order.id, 'cancelled')}
                          title="Cancel Order"
                        >
                          <FiXCircle />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="7" className="no-orders">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && selectedOrder && (
        <OrderDetailModal
          order={selectedOrder}
          onClose={() => setIsModalOpen(false)}
          onUpdateStatus={updateOrderStatus}
        />
      )}
    </div>
  );
}