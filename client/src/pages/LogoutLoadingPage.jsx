// src/pages/LogoutLoadingPage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogoutLoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000); // Nach 2 Sekunden weiterleiten

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
      <div className="text-center">
        <div className="spinner-border text-dark mb-3" role="status" />
        <h5 className="fw-normal">Logging out...</h5>
      </div>
    </div>
  );
}
