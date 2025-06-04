// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBInput
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import '../styles/pagesCSS/LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const isValid = email === 'user@example.com' && password === '123456';

    if (isValid) {
      localStorage.setItem('isLoggedIn', 'true'); // 🔑 Login-Status speichern
      setErrorMsg('');
      navigate('/dashboard'); // Weiterleitung nach erfolgreichem Login
    } else {
      setErrorMsg('Invalid email or password');
    }
  };

  return (
    <MDBContainer fluid className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow-sm p-4 rounded">
        <div className="text-center mb-4 logo-text">
          Eyou.Store
        </div>

        <h5 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '1px' }}>
          Sign into your account
        </h5>

        <form onSubmit={handleLogin} noValidate>
          <div className="mb-3">
            <label className="form-label custom-label">Email address</label>
            <MDBInput 
              type="email" 
              size="md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label custom-label">Password</label>
            <MDBInput 
              type="password" 
              size="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <MDBBtn className="w-100 mb-2" color='dark' size='md' type="submit">
            Login
          </MDBBtn>

          {errorMsg && (
            <p className="text-danger text-center mt-2 small">{errorMsg}</p>
          )}
        </form>

        <div className="text-center mt-3">
          <a href="#!" className="small text-muted d-block mb-2">Forgot password?</a>
          <p className="small">
            Don't have an account? <a href="#!" style={{ color: 'var(--accent-color)' }}>Register here</a>
          </p>
        </div>
      </div>
    </MDBContainer>
  );
}
