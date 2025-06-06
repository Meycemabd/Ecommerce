import React, { useState } from 'react';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import '../styles/pagesCSS/LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    const isValid = email === 'user@example.com' && password === '123456';

    if (isValid) {
      setLoading(true);
      setErrorMsg('');

      // Login und Weiterleitung nach kurzer "Ladezeit"
      setTimeout(() => {
        dispatch(login()); // Redux Login
        navigate('/dashboard');
      }, 1500);
    } else {
      setErrorMsg('Invalid email or password');
    }
  };

  return (
    <MDBContainer fluid className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow-sm p-4 rounded">
        <div className="text-center mb-4 logo-text">Eyou.Store</div>

        <h5 className="text-center mb-4" style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '1px' }}>
          Sign into your account
        </h5>

        {loading ? (
          <div className="text-center mt-4">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Logging you in...</p>
          </div>
        ) : (
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

            <button className="login-submit-btn" type="submit">
              Login
            </button>

            {errorMsg && <p className="text-danger text-center mt-2 small">{errorMsg}</p>}
          </form>
        )}

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
