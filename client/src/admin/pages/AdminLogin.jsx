import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBSpinner,
} from 'mdb-react-ui-kit';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isAdmin', 'true');
        navigate('/admin/dashboard');
      } else {
        alert('Ungültiger Benutzername oder Passwort!');
        setLoading(false);
      }
    }, 1000); // simuliert Server-Verarbeitung
  };

  return (
    <MDBContainer fluid className="d-flex justify-content-center align-items-center vh-100">
      <MDBCard style={{ maxWidth: '400px' }} className="p-4">
        <MDBCardBody>
          <MDBTypography tag="h3" className="mb-4 text-center">
            Admin Login
          </MDBTypography>
          <form onSubmit={handleSubmit}>
            <MDBInput
              label="Benutzername"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mb-3"
            />
            <MDBInput
              label="Passwort"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-4"
            />
            <button
              type="submit"
              className="btn btn-dark w-100"
              disabled={loading}
            >
              {loading ? (
                <>
                  <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
                  Wird geladen...
                </>
              ) : (
                'Einloggen'
              )}
            </button>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
