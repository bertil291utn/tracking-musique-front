import React from 'react';
import PrimaryButton from '../styled-components/primary_button';
import styles from './signup.module.scss';

const SignUp = () => {
  const { background, container } = styles;
  return (
    <div className={background}>
      <div className={container}>
        <h1 className="title">Spotify Stats</h1>
        <p>You are what you measure</p>
        <PrimaryButton title="sign up" />
      </div>
    </div>
  );
};

export default SignUp;
