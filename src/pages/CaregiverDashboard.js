import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const upcomingAppointments = [
  { date: "2025-06-10", time: "10:00 AM", client: "Mrs. Sharma" },
  { date: "2025-06-12", time: "2:00 PM", client: "Mr. Patel" }
];
const assignedClients = [
  { name: "Mrs. Sharma", age: 72, careType: "In-home Care" },
  { name: "Mr. Patel", age: 68, careType: "Companionship" }
];
const tasks = [
  { task: "Medication reminder", status: "Pending", client: "Mrs. Sharma" },
  { task: "Meal preparation", status: "Completed", client: "Mr. Patel" }
];
const messages = ["New message from admin", "Reminder: Submit timesheet"];
const resources = ["Guide to In-home Care", "FAQs", "Contact Support"];

const CaregiverDashboard = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      setCurrentTime(timeString);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleProfile = () => {
    setShowProfileMenu(false);
    navigate('/profile');
  };

  const handleLogout = () => {
    setShowProfileMenu(false);
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const sq = searchQuery.toLowerCase();

  const filteredAppointments = upcomingAppointments.filter((appt) =>
    appt.date.toLowerCase().includes(sq) ||
    appt.time.toLowerCase().includes(sq) ||
    appt.client.toLowerCase().includes(sq)
  );

  const filteredClients = assignedClients.filter((client) =>
    client.name.toLowerCase().includes(sq) ||
    client.careType.toLowerCase().includes(sq)
  );

  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(sq) ||
    task.status.toLowerCase().includes(sq) ||
    task.client.toLowerCase().includes(sq)
  );

  const filteredMessages = messages.filter((msg) =>
    msg.toLowerCase().includes(sq)
  );

  const filteredResources = resources.filter((res) =>
    res.toLowerCase().includes(sq)
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
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <nav className="dashboard-nav">
          <Link to="/">Home</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/profile">Profile</Link>
        </nav>
        <span className="clock-display">
          {currentTime}
        </span>
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

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Upcoming Appointments</h3>
          <ul>
            {filteredAppointments.map((appt, i) => (
              <li key={i}>
                <strong>{appt.date} at {appt.time}</strong><br />
                Client: {appt.client}
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-card">
          <h3>Assigned Clients</h3>
          <ul>
            {filteredClients.map((client, i) => (
              <li key={i}>
                <strong>{client.name}</strong> ({client.age})<br />
                {client.careType}
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-card">
          <h3>Task List</h3>
          <ul>
            {filteredTasks.map((task, i) => (
              <li key={i}>
                <strong>{task.task}</strong> (Client: {task.client})<br />
                Status: {task.status}
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-card">
          <h3>Messages & Notifications</h3>
          <ul>
            {filteredMessages.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </div>
        <div className="dashboard-card">
          <h3>Quick Actions</h3>
          <button className="btn-outline">Request Time Off</button>
          <button className="btn-outline">Report an Issue</button>
        </div>
        <div className="dashboard-card">
          <h3>Resources & Help</h3>
          <ul>
            {filteredResources.map((res, i) => (
              <li key={i}><Link to="#">{res}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaregiverDashboard;
