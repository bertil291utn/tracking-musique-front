import React from 'react';
import Button from '../styled-components/button';
import styles from './signup.module.scss';
import buttonType from '../styled-components/buttonType';

const SignUp = () => {
  const { primaryType, linkType } = buttonType;
  const { background, container } = styles;
  return (
    <div className={background}>
      <div className={container}>
        <h1 className="title">Spotify Stats</h1>
        <p>You are what you measure</p>
        <Button type={primaryType} title="sign up" />
        <Button type={linkType} title="log in" />
      </div>
    </div>
  );
};

export default SignUp;
