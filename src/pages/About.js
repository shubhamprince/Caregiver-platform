import React from 'react';

function About() {
  return (
    <div style={{
      maxWidth: 800,
      margin: "80px auto",
      padding: "32px 24px",
      background: "rgba(255,255,255,0.96)",
      borderRadius: 14,
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      fontFamily: 'Inter, Segoe UI, Arial, sans-serif'
    }}>
      <h2 style={{ color: "#4b0082", marginBottom: 18 }}>About Us</h2>
      <p style={{ fontSize: 18, color: "#333", marginBottom: 18 }}>
        <strong>CareConnect</strong> is dedicated to connecting compassionate caregivers with senior citizens and their families. Our mission is to make care accessible, safe, and supportive for everyone.
      </p>
      <ul style={{ fontSize: 16, color: "#555", marginBottom: 18, paddingLeft: 24 }}>
        <li>Trusted caregiver registration and verification</li>
        <li>Secure and easy-to-use platform</li>
        <li>Modern, responsive design for all devices</li>
        <li>Support for families and caregivers alike</li>
      </ul>
      <p style={{ fontSize: 16, color: "#555" }}>
        <strong>Contact us:</strong> <a href="mailto:careconnect@example.com" style={{ color: "#4b0082" }}>careconnect@example.com</a>
      </p>
    </div>
  );
}

export default About;
