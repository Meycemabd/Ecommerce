import React, { useState } from 'react';
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import '../styles/pagesCSS/LoginPage.css';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');

    try {
      // Mock users for testing
      const mockUsers = [
        { 
          email: 'user@example.com', 
          password: '123456',
          role: 'user',
          name: 'John Doe' 
        },
        { 
          email: 'admin@example.com', 
          password: 'admin123',
          role: 'admin',
          name: 'Admin User'
        }
      ];

      const user = mockUsers.find(u => 
        u.email === formData.email && u.password === formData.password
      );

      if (user) {
        dispatch(login({
          id: Date.now(),
          email: user.email,
          name: user.name,
          role: user.role
        }));
        navigate('/loading'); // Redirect to loading page
      } else {
        setErrorMsg('Invalid email or password');
      }
    } catch (error) {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MDBContainer fluid className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow-sm p-4 rounded">
        <div className="text-center mb-4 logo-text">Eyou.Store</div>

        <h5 className="text-center mb-4">
          Sign into your account
        </h5>

        <form onSubmit={handleLogin} noValidate>
          <div className="mb-3">
            <label className="form-label custom-label">Email address</label>
            <MDBInput
              type="email"
              name="email"
              size="md"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className="mb-3">
            <label className="form-label custom-label">Password</label>
            <MDBInput
              type="password"
              name="password"
              size="md"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <button 
            className="login-submit-btn" 
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          {errorMsg && (
            <p className="text-danger text-center mt-2 small">{errorMsg}</p>
          )}
        </form>

        <div className="text-center mt-3">
          <Link to="/forgot-password" className="small text-muted d-block mb-2">
            Forgot password?
          </Link>
          <p className="small">
            Don't have an account?{' '}
            <Link to="/register" className="accent-link">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </MDBContainer>
  );
}