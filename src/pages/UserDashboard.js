import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const careTypes = [
  {
    title: "In-home Care",
    desc: "Caregivers can help with daily tasks, provide companionship, and offer support.",
    img: "https://b3383504.smushcdn.com/3383504/wp-content/uploads/2025/02/Health-care-at-home-1024x1024.png?lossy=2&strip=1&webp=1"
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
  },
  {
    title: "Personal Care",
    desc: "Assistance with daily hygiene, bathing, dressing, and grooming.",
    img: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Medication Management",
    desc: "Help with organizing and administering medications.",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Meal Preparation",
    desc: "Planning and cooking nutritious meals according to dietary needs.",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Transportation Assistance",
    desc: "Providing rides to appointments, errands, or social activities.",
    img: "https://images.unsplash.com/photo-1598128558393-70ff21433be0?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Housekeeping",
    desc: "Light cleaning, laundry, and maintaining a safe living environment.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Errand Services",
    desc: "Running errands such as grocery shopping, picking up prescriptions, or mailing packages.",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Social Companionship",
    desc: "Engaging in conversation, games, hobbies, or outings to reduce loneliness.",
    img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Residential Care",
    desc: "Long-term care in a home-like setting for those who need ongoing support.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Palliative Care",
    desc: "Specialized care focused on comfort and quality of life for those with serious illnesses.",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Rehabilitation Care",
    desc: "Support for recovery after surgery, injury, or illness (physical therapy, exercises, etc.).",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Pet Care Assistance",
    desc: "Help with feeding, walking, or caring for pets.",
    img: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Technology Assistance",
    desc: "Setting up and using phones, tablets, computers, or smart home devices.",
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Home Safety Assessments",
    desc: "Evaluating and improving home safety to prevent falls and accidents.",
    img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Night Care",
    desc: "Overnight support for those who need help during the night.",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Specialized Dementia Care",
    desc: "Tailored support for individuals with Alzheimer’s or other forms of dementia.",
    img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=80"
  }
];

const caregivers = [
  {
    name: "Rakulpreet",
    role: "Experienced caregiver",
    img: "https://medanta.s3.ap-south-1.amazonaws.com/all-doctor-with-slug/dr-arya-suchismita.png"
  },
  {
    name: "Jasmine",
    role: "Certified nursing assistant",
    img: "https://theindianpractitioner.com/wp-content/uploads/2022/03/Dr.-Manjula-Anagani-218x300.png"
  },
  {
    name: "Shivani",
    role: "Specializes in memory care",
    img: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    name: "Lakshmi",
    role: "Offers respite care",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

function Dashboard() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleProfile = () => {
    setShowProfileMenu(false);
    navigate('/profile');
  };

  const handleLogout = () => {
    setShowProfileMenu(false);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const filteredCareTypes = careTypes.filter(care =>
    care.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    care.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCaregivers = caregivers.filter(cg =>
    cg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cg.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-root">
      <header className="dashboard-header">
        <div className="logo">
          <img src="/care_2871732.png" alt="CareConnect Logo" style={{ height: '40px', marginRight: '10px' }} />
          <span className="care-text">Care</span>
          <span className="connect-text">Connect</span>
        </div>
        <div className="dashboard-search">
          <input
            type="text"
            placeholder="Search for care or caregivers"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <nav className="dashboard-nav">
          <Link to="/">Home</Link>
          <Link to="/caregivers">Caregivers</Link>
          <div className="services-dropdown">
            <span className="services-link">Services</span>
            <div className="services-dropdown-content">
              <Link to="/service1">In-home Care</Link>
              <Link to="/service2">Companionship</Link>
              <Link to="/service3">Memory Care</Link>
              <Link to="/service4">Respite Care</Link>
            </div>
          </div>
          <Link to="/guides">Guides</Link>
        </nav>
        <button className="btn-primary get-care-btn">Get Care</button>
        <div className="profile-dropdown">
          <button
            className="profile-icon"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            👤
          </button>
          {showProfileMenu && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleProfile}>My Profile</button>
              <button className="dropdown-item">Settings</button>
              <button className="dropdown-item" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Explore types of care</h2>
          <Link to="/detailed-care" style={{ textDecoration: 'none' }}>
            <button className="btn-outline">Learn more</button>
          </Link>
        </div>
        <div className="care-types-grid">
          {filteredCareTypes.length > 0 ? (
            filteredCareTypes.map((care, i) => (
              <div className="care-type-card" key={i}>
                <img src={care.img} alt={care.title} />
                <h3 className="card-title">{care.title}</h3>
                <p className="card-desc">{care.desc}</p>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              No matching care types found.
            </p>
          )}
        </div>
      </section>

      <section className="dashboard-section caregivers-section">
        <h2>Featured Caregivers</h2>
        <div className="caregivers-grid">
          {filteredCaregivers.length > 0 ? (
            filteredCaregivers.map((cg, i) => (
              <div className="caregiver-card" key={i}>
                <img src={cg.img} alt={cg.name} />
                <h4 className="caregiver-name">{cg.name}</h4>
                <p className="caregiver-role">{cg.role}</p>
              </div>
            ))
          ) : (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              No matching caregivers found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
