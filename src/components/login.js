// import React, { useState } from 'react';
// import '../styles/Auth.css';
// import { Link, useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password.");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const matchedUser = users.find(user => user.email === email && user.password === password);

//     if (!matchedUser) {
//       setError("Invalid email or password.");
//       return;
//     }

//     localStorage.setItem('currentUser', JSON.stringify(matchedUser));
//     setError('');
//     navigate('/dashboard');
//   };

//   return (
//     <div className="auth-bg">
//       <div className="auth-card">
//         <h2>Login</h2>
//         <p style={{ color: '#ffffff' }}>Welcome back to CareConnect</p>
//         <form onSubmit={handleLogin}>
//           <input
//             className="auth-input"
//             type="email"
//             placeholder="Email"
//             autoComplete="username"
//             required
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           <input
//             className="auth-input"
//             type="password"
//             placeholder="Password"
//             autoComplete="current-password"
//             required
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           {error && <div className="auth-error">{error}</div>}
//           <button className="auth-btn" type="submit">Login</button>
//         </form>
//         <div style={{ marginBottom: 10 }}>
//           <Link className="auth-link" to="/forgot-password">Forgot password?</Link>
//         </div>
//         <div>
//           <span style={{ color: '#ffffff' }}>Don't have an account? </span>
//           <Link className="auth-link" to="/signup">Sign Up</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import '../styles/Auth.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find(user => user.email === email && user.password === password);

    if (!matchedUser) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem('currentUser', JSON.stringify(matchedUser));
    setError('');
    
    if (matchedUser.userType === 'caregiver') {
      navigate('/caregiver-dashboard');
    } else {
      navigate('/dashboard');
    }
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
          <button className="auth-btn" type="submit">Login</button>
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
