import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBSpinner } from 'mdb-react-ui-kit';
import '../styles/pagesCSS/LoadingPage.css';

export default function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <MDBSpinner className="loading-spinner">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
        <p className="loading-text">Logging you in...</p>
      </div>
    </div>
  );
}