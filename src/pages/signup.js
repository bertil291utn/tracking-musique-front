import React from 'react';
import MainButton from '../styled-components/main_button';
import styles from './signup.module.scss';

const SignUp = () => {
  const { background, container } = styles;
  return (
    <div className={background}>
      <div className={container}>
        <h1 className="title">Spotify Stats</h1>
        <p>You are what you measure</p>
        <MainButton title="sign up" />
      </div>
    </div>
  );
};

export default SignUp;
