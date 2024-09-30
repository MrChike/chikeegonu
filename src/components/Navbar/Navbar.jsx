// Navbar.js
import { useState } from 'react';
import './Navbar.css';  // Import styles
import Badge from '../../utils/img/badge.avif';

export const externalFunction = (data) => {
  return data;
};

const Navbar = () => {
  const handleLinkClick = (data) => {
    const trimData = data.split('s').join('');
    externalFunction(trimData);
  };

  return (
    <nav className="navbar">
      {/* Sidebar Toggle */}
      <div className="sidebar-toggle">
        <button>☰</button>
      </div>

      {/* Logo and Username */}
      <div className="logo-section">
        <a href="https://github.com/MrChike">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" className="logo" />
        </a>
        &nbsp;
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#">Overview</a>
        &nbsp;
        <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Contributions </a>
        &nbsp;
        <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Projects</a>
        &nbsp;
        <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Certifications</a>
      </div>

      {/* Action Icons */}
      <div className="action-icons">
        <button>+</button>
        <button>🔔</button>
        <img src={Badge} alt="User Profile" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
