/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import '../components/Navbar/Navbar.css';  // Import styles
import '../components/Profile/Profile.css';
import Badge from '../utils/img/arctic-code-achievement.png';
import IBMBadge from '../utils/img/DataScience_WhatIs_Certification.png';
import IBMDataAnalysisBadge from '../utils/img/Data_Analysis_Badge.png';
import IBMMachineLearningBadge from '../utils/img/Machine_learning_badge.png';
import PythonBadge from '../utils/img/Python_Badge.svg';
import IBMPythonBadge from '../utils/img/python_badge.png';
import IBMSqlBadge from '../utils/img/db_cert.png';
import ProfilePic from '../utils/img/ProfilePic.jpg';
import Card from '../components/Card/Card.jsx';
import Certification from '../components/Card/Certification.jsx';
import ProfileCard from '../components/Profile/ProfileCard';

const Overview = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);  // State to manage navbar visibility

  const handleLinkClick = (data) => {
    const trimData = data.split('s').join('');
    console.log('trimData', trimData);
    setActiveTab(trimData);
  };

  const user = {
    profilePicture: ProfilePic,
    name: 'Chike Egonu',
    username: 'MrChike',
    bio: 'A self-disciplined and focused software engineer with experience in creating innovative solutions with a desire to contribute & solve real-world problems.',
    followers: 29,
    following: 'Elon Musk',
    organization: 'CodeCResent',
    location: 'Lagos, Nigeria',
    email: 'chikeegonu@gmail.com',
    linkedin: <a href="https://www.linkedin.com/in/chikeegonu/" target="_blank" rel="noreferrer">linkedin.com/in/chikeegonu/</a>, 
    hackerrank: <a href="https://www.hackerrank.com/profile/chike" target="_blank" rel="noreferrer">hackerrank.com/profile/chike</a>, 
    leetcode: <a href="https://leetcode.com/u/MrChike/" target="_blank" rel="noreferrer">leetcode.com/u/MrChike/</a>, 
    kaggle: <a href="https://www.kaggle.com/chikeegonu" target="_blank" rel="noreferrer">kaggle.com/chikeegonu</a>, 
    DEV: <a href="https://dev.to/mrchike" target="_blank" rel="noreferrer">dev.to/mrchike</a>, 
    Devpost: <a href="https://devpost.com/MrChike/challenges" target="_blank" rel="noreferrer">devpost.com/MrChike/Hackathons</a>, 
    Github: <a href="https://github.com/MrChike" target="_blank" rel="noreferrer">github.com/MrChike</a>, 
    achievementBadge: Badge,
    IBMDatascienceAchievementBadge: IBMBadge,
    IBMDataAnalysisAchievementBadge: IBMDataAnalysisBadge,
    PythonAchievementBadge: PythonBadge,
    IBMPythonAchievementBadge: IBMPythonBadge,
    IBMSqlAchievementBadge: IBMSqlBadge,
    IBMMachineLearningAchievementBadge: IBMMachineLearningBadge,
  };

  // Toggle Navbar function
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <>
      {/* <nav className="navbar"> */}

      <nav className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
        {/* Sidebar Toggle */}
        <div className="sidebar-toggle">
          <button onClick={toggleNavbar}>
            {isNavbarOpen ? "×" : "☰"} {/* Toggle icon between hamburger and close */}
          </button>
        </div>

        {/* Logo and Username */}
        <div className="logo-section">
          <a href="https://github.com/MrChike">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub logo" className="logo" />
          </a>
          <span className="username">MrChike</span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isNavbarOpen ? 'open' : ''}`}>
          <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Overviews</a>
          <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Contributions</a>
          <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Projects</a>
          <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Certifications</a>
        </div>

        {/* Action Icons */}
        <div className="action-icons">
          <button>+</button>
          <button>🔔</button>
          <img src={Badge} alt="User Profile" className="logo" />
        </div>
      </nav>

      <div className="profile-container">
        <div>
          <ProfileCard user={user} />
        </div>  
        <div className="profile-right">
          {activeTab === 'Overview' && <Card />}
          {activeTab === 'Contribution' && <Card tab={activeTab.toLowerCase()} />}
          {activeTab === 'Project' && <Card tab={activeTab.toLowerCase()} />}
          {activeTab === 'Certification' && <Certification />}
        </div> 
      </div>
    </>
  );
};

export default Overview;
