// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../styles/Dashboard.css';

// const Profile = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="dashboard-root">
//       <header className="dashboard-header">
//         <div className="logo">
//           <span className="care-text">Care</span>
//           <span className="connect-text">Connect</span>
//         </div>
//         <div className="dashboard-search">
//           <input type="text" placeholder="Search for care or caregivers" />
//         </div>
//         <nav className="dashboard-nav">
//           <Link to="/">Home</Link>
//           <Link to="/caregivers">Caregivers</Link>
//           <div className="services-dropdown">
//             <span className="services-link">Services</span>
//             <div className="services-dropdown-content">
//               <Link to="/service1">Service 1</Link>
//               <Link to="/service2">Service 2</Link>
//               <Link to="/service3">Service 3</Link>
//               <Link to="/service4">Service 4</Link>
//             </div>
//           </div>
//           <Link to="/guides">Guides</Link>
//         </nav>
//         <button className="btn-primary get-care-btn">Get Care</button>
//         <div className="profile-dropdown">
//           <button className="profile-icon" onClick={() => navigate('/')}>
//             👤
//           </button>
//         </div>
//       </header>
//       <section className="dashboard-section">
//         <h2>My Profile</h2>
//         <div style={{ padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
//           <p>Welcome to your profile page!</p>
//           <p>Here you can manage your settings and preferences.</p>
//           <button className="btn-outline" style={{ marginTop: '1rem' }} onClick={() => navigate('/')}>Back to Dashboard</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Profile;


import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Dashboard.css';


const careTypes = [
  {
    title: "In-home Care",
    desc: "Caregivers can help with daily tasks, provide companionship, and offer support.",
    img: "https://b3383504.smushcdn.com/3383504/wp-content/uploads/2025极客时间/02/Health-care-at-home-1024x1024.png?lossy=2&strip=1&webp=1"
  },
  {
    title: "Companionship",
    desc: "Caregivers offer companionship, engage in activities, and provide emotional support.",
    img: "https://myhometouch.com/wp-content/uploads/2017/06/Screen-Shot-2017-05-23-at-18.05.10-1140x662.jpg"
  },
  {
    title: "Memory Care",
    desc: "Caregivers can help those with dementia, Alzheimer's, and other memory-related conditions.",
    img: "https://www.aplaceformom.com/image/web-lighthouse/prod/is-it-time-for-memory-care?t=default"
  },
  {
    title: "Respite Care",
    desc: "Caregivers provide short-term care to give family caregivers a break.",
    img: "https://baptistretirement.org/wp-content/uploads/2023/10/What-Is-the-Purpose-of-Respite-Care.jpg"
  }
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-root">
      <header className="dashboard-header">
        <div className="logo">
          <span className="care-text">Care</span>
          <span className="connect-text">Connect</span>
        </div>
        <div className="dashboard-search">
          <input type="text" placeholder="Search for care or caregivers" />
        </div>
        <nav className="dashboard-nav">
          <Link to="/">Home</Link>
          <Link to="/caregivers">Caregivers</Link>
          <div className="services-dropdown">
            <span className="services-link">Services</span>
            <div className="services-dropdown-content">
              {careTypes.map((care, i) => (
                <Link to={`/service-${i+1}`} key={i}>{care.title}</Link>
              ))}
              <Link to="/services">See all services</Link>
            </div>
          </div>
          <Link to="/guides">Guides</Link>
        </nav>
        <button className="btn-primary get-care-btn">Get Care</button>
        <div className="profile-dropdown">
          <button className="profile-icon" onClick={() => navigate('/')}>
            👤
          </button>
        </div>
      </header>
      <section className="dashboard-section">
        <h2>My Profile</h2>
        <div style={{ padding: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <p>Welcome to your profile page!</p>
          <p>Here you can manage your settings and preferences.</p>
          <button className="btn-outline" style={{ marginTop: '1rem' }} onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
      </section>
    </div>
  );
};

export default Profile;


