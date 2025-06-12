// import React, { useState } from 'react';
// import '../styles/Auth.css';
// import { Link, useNavigate } from 'react-router-dom';

// function Signup() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [gender, setGender] = useState('');
//   const [location, setLocation] = useState('');
//   const [experience, setExperience] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     const newUser = { name, email, phone, gender, location, experience, password};

//     const users = JSON.parse(localStorage.getItem('users')) || [];

//     // const userExists = users.some(user => user.email === email);
//     if (users.find(user => user.email === email)) {
//       setError("User already exists with this email.");
//       return;
//     }


//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     localStorage.setItem('currentUser', JSON.stringify(newUser));

//     setError('');
//     navigate('/dashboard');
//   };

//   return (
//     <div className="auth-bg">
//       <div className="auth-card">
//         <h2>Sign Up</h2>
//         <p style={{ color: '#ffffff' }}>Create your CareConnect account</p>
//         <form onSubmit={handleSignup}>
//           <input className="auth-input" type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
//           <input className="auth-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
//           <input className="auth-input" type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
//           <select className="auth-input" value={gender} onChange={e => setGender(e.target.value)} required>
//             <option value="" disabled>Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <input className="auth-input" type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
//           <input className="auth-input" type="text" placeholder="Experience" value={experience} onChange={e => setExperience(e.target.value)} required />
//           <input className="auth-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
//           <input className="auth-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
//           {error && <div className="auth-error">{error}</div>}
//           <button className="auth-btn" type="submit">Sign Up</button>
//         </form>
//         <div>
//           <span style={{ color: '#ffffff' }}>Already have an account? </span>
//           <Link className="auth-link" to="/login">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from 'react';
import '../styles/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignup = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const newUser = {
      name,
      email,
      phone,
      gender,
      location,
      experience: userType === 'caregiver' ? experience : '',
      password,
      userType
    };

    const res = await axios.post("http://localhost:3000/api/auth/signup",{'email': newUser.email ,'phone': newUser.phone,'city': newUser.location,'years_of_experience': newUser.years_of_experience,'languages': '','bio': '', 'name': newUser.name, 'password':newUser.password})
    if(res.status === 200){
      console.log("Login Successfully");
      navigate('/dashboard')
    }
    // const users = JSON.parse(localStorage.getItem('users')) || [];

    // if (users.find(user => user.email === email)) {
    //   setError("User already exists with this email.");
    //   return;
    // }

    // users.push(newUser);
    // localStorage.setItem('users', JSON.stringify(users));
    // localStorage.setItem('currentUser', JSON.stringify(newUser));

    setError('');
    // Redirect based on userType
    if (userType === 'user') {
      navigate('/dashboard');
    } else {
      navigate('/caregiver-dashboard');
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <p style={{ color: '#ffffff' }}>Create your CareConnect account</p>
        <form onSubmit={handleSignup}>
          <select className="auth-input" value={userType} onChange={e => setUserType(e.target.value)} required>
            <option value="user">User</option>
            <option value="caregiver">Caregiver</option>
          </select>
          <input className="auth-input" type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required />
          <input className="auth-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <input className="auth-input" type="tel" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
          <select className="auth-input" value={gender} onChange={e => setGender(e.target.value)} required>
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input className="auth-input" type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} required />
          {userType === 'caregiver' && (
            <select className="auth-input" value={experience} onChange={e => setExperience(e.target.value)} required>
              <option value="" disabled>Select Experience</option>
              <option value="<=6 months">Less or equal than 6 months</option>
              <option value="<=1 year">Less or equal than 1 year</option>
              <option value="<=2 years">Less or equal than 2 years</option>
              <option value="<=3 years">Less or equal than 3 years</option>
              <option value=">3 years">More than 3 years</option>
            </select>
          )}
          <input className="auth-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <input className="auth-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
          {error && <div className="auth-error">{error}</div>}
          <button className="auth-btn" type="submit">Sign Up</button>
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
