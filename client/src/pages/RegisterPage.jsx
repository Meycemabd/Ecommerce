import React, { useState } from 'react';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/pagesCSS/LoginPage.css';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    setTimeout(() => {
      setLoading(false);
      navigate('/registered-success');
    }, 1500);
  };

  return (
    <MDBContainer fluid className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow-sm p-4 rounded">
        <div className="text-center mb-4 logo-text">Eyou.Store</div>

        <h5
          className="text-center mb-4"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: '300', letterSpacing: '1px' }}
        >
          Create your account
        </h5>

        {loading ? (
          <div className="text-center mt-4">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Registering...</p>
          </div>
        ) : (
          <form onSubmit={handleRegister} noValidate>
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

            <div className="mb-3">
              <label className="form-label custom-label">Confirm Password</label>
              <MDBInput
                type="password"
                size="md"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button className="login-submit-btn" type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </button>

            {errorMsg && <p className="text-danger text-center mt-2 small">{errorMsg}</p>}
          </form>
        )}

        <div className="text-center mt-3">
          <p className="small">
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--accent-color)' }}>
              Login here
            </Link>
          </p>
        </div>
      </div>
    </MDBContainer>
  );
}
