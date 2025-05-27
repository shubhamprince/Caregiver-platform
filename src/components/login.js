import React, { useState } from 'react';
import '../styles/Auth.css';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError('');
    
    console.log("Login:", { email, password });
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Login</h2>
        <p style={{ color: '#ffffff' }}>Welcome back to CareConnect</p>
        <form onSubmit={handleLogin}>
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            autoComplete="username"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <div className="auth-error">{error}</div>}
          <button  className="auth-btn" type="submit">
            Login
          </button>
        </form>
        <div style={{ marginBottom: 10 }}>
          <Link className="auth-link" to="/forgot-password">Forgot password?</Link>
        </div>
        <div>
          <span style={{ color: '#ffffff' }}>Don't have an account? </span>
          <Link className="auth-link" to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
