import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from '../../redux/statisticsSlice';
import { 
  FiCalendar 
} from 'react-icons/fi';
import SalesChart from './SalesChart';
import '../Styles/Statistics.css';

export default function Statistics() {
  const dispatch = useDispatch();
  const { data: stats, loading, error } = useSelector((state) => state.statistics);
  const [timeframe, setTimeframe] = useState('week'); // 'week', 'month', 'year'

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };

  if (loading) return <div className="loading-spinner">Loading statistics...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!stats) return null;

  return (
    <div className="statistics-container">
      <div className="statistics-header">
        <div className="header-content">
          <h1>Store Statistics</h1>
          <p>Overall store performance and metrics</p>
        </div>
        <div className="timeframe-selector">
          {['week', 'month', 'year'].map((frame) => (
            <button 
              key={frame}
              className={`timeframe-btn ${timeframe === frame ? 'active' : ''}`}
              onClick={() => handleTimeframeChange(frame)}
            >
              <FiCalendar /> {frame.charAt(0).toUpperCase() + frame.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="charts-grid">
        <SalesChart data={getSalesData(stats, timeframe)} />

        <div className="analytics-cards">
          <div className="analytics-card">
            <h4>Top Products</h4>
            <div className="product-list">
              {getTopProducts(stats).map(product => (
                <div key={product.id} className="product-item">
                  <span className="product-name">{product.name}</span>
                  <span className="product-sales">€{product.sales}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="analytics-card">
            <h4>Customer Growth</h4>
            <div className="growth-stats">
              <div className="growth-item">
                <span className="label">New Customers</span>
                <span className="value">{stats.customers.new}</span>
              </div>
              <div className="growth-item">
                <span className="label">Retention Rate</span>
                <span className="value">
                  {calculateRetentionRate(stats)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// === HELPER FUNCTIONS ===
function getSalesData(stats, timeframe) {
  const data = [];
  const periods = timeframe === 'week' ? 7 : timeframe === 'month' ? 30 : 12;

  for (let i = 0; i < periods; i++) {
    data.push({
      date: timeframe === 'year' ? `Month ${i + 1}` : `Day ${i + 1}`,
      amount: Math.floor(stats.revenue.total / periods + Math.random() * 500),
    });
  }

  return data;
}

function getTopProducts(stats) {
  return [
    { id: 1, name: 'Product A', sales: 1200 },
    { id: 2, name: 'Product B', sales: 950 },
    { id: 3, name: 'Product C', sales: 850 },
    { id: 4, name: 'Product D', sales: 700 },
  ];
}

function calculateRetentionRate(stats) {
  return Math.floor(75 + Math.random() * 10);
}