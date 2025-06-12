import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/login';
import Signup from './components/signup';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './pages/UserDashboard';
import CaregiverDashboard from './pages/CaregiverDashboard';
import DetailedCarePage from './pages/DetailedCarePage';
import Profile from './pages/Profile';

function App() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userType = currentUser?.userType;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            userType === 'caregiver' ? (
              <Navigate to="/caregiver-dashboard" />
            ) : (
              <Dashboard />
            )
          }
        />
        <Route path="/caregiver-dashboard" element={<CaregiverDashboard />} />
        <Route path="/detailed-care" element={<DetailedCarePage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
