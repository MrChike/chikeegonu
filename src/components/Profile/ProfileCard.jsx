import React from 'react';
import './ProfileCard.css'; // Import your CSS styles here
import { 
  FaBuilding, FaLinkedin, FaKaggle, FaDev, FaGithub
} from 'react-icons/fa';
import { SiLeetcode, SiDevpost } from "react-icons/si";
import { GoLocation } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img className="profile-img" src={user.profilePicture} alt={user.name} />
      </div>

      <div className="profile-body">
        <h2 className="profile-name">{user.name}</h2>
        <h3 className="profile-username">{user.username}</h3>
        <p className="profile-bio">{user.bio}</p>

        <button className="edit-profile-btn">Edit profile</button>

        <div className="profile-stats">
          <span>{user.followers} followers</span>
          <span> · </span>
          <span>following {user.following}</span>
        </div>

        <div className="profile-info">
          <p><FaBuilding/> {user.organization}</p>
          <p><GoLocation/> {user.location}</p>
          <p><MdEmail/> {user.email}</p>
          <p><FaLinkedin/> {user.linkedin}</p>
          <p><SiLeetcode/> {user.leetcode}</p>
          <p><FaKaggle/> {user.kaggle}</p>
          <p><SiDevpost/> {user.Devpost}</p>
          <p><FaDev/> {user.DEV}</p>
          <p><FaGithub/> {user.Github}</p>
        </div>

        <div className="profile-achievements">
          <h4>Achievements</h4>
          <img className="achievement-badge" src={user.IBMSqlAchievementBadge} alt="SqlAchievement Badge" />
          <img className="achievement-badge" src={user.achievementBadge} alt="Achievement Badge" />
          <img className="achievement-badge" src={user.IBMDataAnalysisAchievementBadge} alt="Data Analysis Achievement Badge" />
          <img className="achievement-badge" src={user.PythonAchievementBadge} alt="Python Achievement Badge" />
          <img className="achievement-badge" src={user.IBMDatascienceAchievementBadge} alt="DSc Achievement Badge" />
          <img className="achievement-badge" src={user.IBMPythonAchievementBadge} alt="PythonAchievement Badge" />
          <img className="achievement-badge" src={user.IBMMachineLearningAchievementBadge} alt="PythonAchievement Badge" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
