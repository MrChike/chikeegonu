// Profile.js
import React from 'react';
import './Profile.css';
import Card from '../../../src/components/Card/Card.jsx'
import ProfileCard from './ProfileCard';
import ProfilePic from '../../utils/img/ProfilePic.jpg';
import Badge from '../../utils/img/badge.avif';
import Navbar from '../Navbar/Navbar.jsx';

const Profile = ({data}) => {
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
    linkedin: <a href="https://www.linkedin.com/in/chikeegonu/" target="_blank"> www.linkedin.com/in/chikeegonu/ </a>, 
    achievementBadge: Badge
  };
  return (
    <div className="profile-container">
      <div>
        <ProfileCard user={user} />
      </div>  
      <div className="profile-right">
        <Card/>
      </div> 
    </div>
  );
};


export default Profile;