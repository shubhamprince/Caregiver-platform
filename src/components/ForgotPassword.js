import React, { useState } from 'react';
import '../styles/Login.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    
  };

  return (
    <div className="login-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your registered email"
          required
          onChange={e => setEmail(e.target.value)}
        />
        <button className="btn primary" type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
