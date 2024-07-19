// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile-picture">Profile Picture</div>
      <nav className="sidebar-nav">
        <a href="/edit-profile">Edit Profile</a>
        <a href="/contact-support">Contact Support</a>
        <a href="/faq">FAQ</a>
        <a href="/logout">Logout</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
