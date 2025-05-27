import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const footerRef = useRef(null);

  const scrollToFooter = (e) => {
    e.preventDefault();
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-bg">
      <div className="page-wrapper">
        <nav className="navbar">
          <div className="logo">CARE<span>CONNECT</span></div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <a href="#footer" onClick={scrollToFooter}>About Us</a>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>

        <div className="hero-section">
          <div className="hero-text">
            <h1>Join Us in Changing Lives</h1>
            <p>Connecting caregivers with senior citizens and their families—easily and safely.</p>
            <div className="hero-buttons">
              <Link to="/signup" className="btn primary">Get Started</Link>
              <Link to="/login" className="btn secondary">Login</Link>
            </div>
          </div>
        </div>
      </div>

      <footer ref={footerRef} id="footer" className="site-footer">
        <h3>Contact Us</h3>
        <p>Email: careconnect@gmail.com</p>
        <p>Phone: +91-1224466880</p>
        <p>
          Instagram: <a href="https://instagram.com/careconnect" target="_blank" rel="noopener noreferrer">@careconnect</a>
        </p>
        <p>Address: Sarojini Nagar, New Delhi, India</p>
      </footer>
    </div>
  );
}

export default Home;
