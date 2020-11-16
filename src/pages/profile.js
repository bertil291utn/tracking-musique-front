import React from 'react';
import { useHistory } from 'react-router-dom';
import store from 'store';
import storeKeys from '../assets/storeKeys';
import Button from '../components/button';
import PhoneContainer from '../components/phone-container';
import './profile.scss';

const Profile = () => {
  const history = useHistory();

  const signOut = () => {
    store.remove(storeKeys.TOKEN_VAR);
    history.push('/');
  };

  return (
    <PhoneContainer tabActive="3">
      <div className="profile-container">
        <div className="profile-content">

          <Button classType="secondary" title="sign out" onclickbutton={signOut} />
        </div>
      </div>
    </PhoneContainer>
  );
};

export default Profile;
