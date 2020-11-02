import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../styled-components/button';
import buttonType from '../styled-components/elementType';
import styles from './splash.module.scss';

const Splash = () => {
  const { primaryType, linkType } = buttonType;
  const { background, container } = styles;
  return (
    <div className={background}>
      <div className={container}>
        <h1 className="title">Spotify Stats</h1>
        <p>You are what you measure</p>
        <Link to="/signup">
          <Button classType={primaryType} title="sign up" />
        </Link>
        <Link to="/login">
          <Button classType={linkType} title="log in" />
        </Link>
      </div>
    </div>
  );
};

export default Splash;
