import React from 'react';
import './ProfileCard.css'; // Import your CSS styles here
import { 
  FaBuilding, FaLinkedin, FaHackerrank
} from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
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
          <p><FaHackerrank/> {user.hackerrank}</p>
          <p><SiLeetcode/> {user.leetcode}</p>
        </div>

        <div className="profile-achievements">
          <h4>Achievements</h4>
          <img className="achievement-badge" src={user.achievementBadge} alt="Achievement Badge" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
