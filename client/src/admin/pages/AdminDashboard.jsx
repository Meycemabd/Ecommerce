import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBTypography, MDBBtn } from 'mdb-react-ui-kit';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    navigate('/admin/login');
  };

  return (
    <MDBContainer className="p-4">
      <MDBTypography tag="h2" className="mb-4">
        Admin Dashboard
      </MDBTypography>
      <p>Willkommen im Admin-Bereich!</p>
      <button onClick={handleLogout} className="btn btn-danger">
            Logout
        </button>
    </MDBContainer>
  );
}
