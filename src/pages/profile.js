/* eslint-disable */
import React from 'react';
import Button from '../components/button';
import PhoneContainer from '../components/phone-container';
import './profile.scss'

const Profile = () => {
  return (
    <PhoneContainer tabActive="3">
      <div className="profile-container">
        <div className="profile-content">

          <Button classType="secondary" title="sign out" />
        </div>
      </div>
    </PhoneContainer>
  );
}

export default Profile;