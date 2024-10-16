import { useState } from 'react';
import '../components/Navbar/Navbar.css';  // Import styles
import '../components/Profile/Profile.css';
import Badge from '../utils/img/arctic-code-achievement.png';
import ProfilePic from '../utils/img/ProfilePic.jpg';
import Card from '../components/Card/Card.jsx'
import Certification from '../components/Card/Certification.jsx'
import ProfileCard from '../components/Profile/ProfileCard';


const Overview = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const handleLinkClick = (data) => {
    const trimData = data.split('s').join('');
    console.log('trimData', trimData)
    setActiveTab(trimData);
  };

  const user = {
    profilePicture: ProfilePic,
    name: 'Chike Egonu',
    username: 'MrChike',
    bio: 'A self-disciplined, focused & experienced software engineer with the desire to solve world problems via tech.',
    followers: 1000,
    following: 'Elon Musk',
    organization: 'CodeCResent',
    location: 'Lagos, Nigeria',
    email: 'chikeegonu@gmail.com',
    linkedin: <a href="https://www.linkedin.com/in/chikeegonu/" target="_blank"> linkedin.com/in/chikeegonu/ </a>, 
    hackerrank: <a href="https://www.hackerrank.com/profile/chike" target="_blank"> hackerrank.com/profile/chike </a>, 
    leetcode: <a href="https://leetcode.com/u/MrChike/" target="_blank"> leetcode.com/u/MrChike/ </a>, 
    kaggle: <a href="https://www.kaggle.com/chikeegonu" target="_blank"> kaggle.com/chikeegonu </a>, 
    DEV: <a href="https://dev.to/mrchike" target="_blank"> dev.to/mrchike </a>, 
    Devpost: <a href="https://devpost.com/MrChike/challenges" target="_blank"> devpost.com/MrChike/Hackathons </a>, 
    achievementBadge: Badge
  };

  return (
    <>
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
          <span className="username">MrChike</span>
        &nbsp;
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Overviews</a>
        &nbsp;
        <a href="#" onClick={(e) => handleLinkClick(e.target.innerText)}>Contributions</a>
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
