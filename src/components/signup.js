import React, { useState } from 'react';
import '../styles/Auth.css';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError('');
    
    console.log("Signup Data:", {
      name, email, phone, gender, location, experience, password
    });
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <p style={{ color: '#ffffff' }}>Create your CareConnect account</p>
        <form onSubmit={handleSignup}>
          <input
            className="auth-input"
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            className="auth-input"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="auth-input"
            type="tel"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <select
            className="auth-input"
            required
            value={gender}
            onChange={e => setGender(e.target.value)}
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            className="auth-input"
            type="text"
            placeholder="Location"
            required
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <input
            className="auth-input"
            type="text"
            placeholder="Experience (e.g. 2 years, 6 months)"
            required
            value={experience}
            onChange={e => setExperience(e.target.value)}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
          {error && <div className="auth-error">{error}</div>}
          <button className="auth-btn" type="submit">
            Sign Up
          </button>
        </form>
        <div>
          <span style={{ color: '#ffffff' }}>Already have an account? </span>
          <Link className="auth-link" to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
