import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import styles from './splash.module.scss';

const Splash = () => {
  const { background, container } = styles;
  return (
    <div className={background}>
      <div className={container}>
        <h1 className="title">Spotify Stats</h1>
        <p>You are what you measure</p>
        <Link to="/signup">
          <Button classType="primary" title="sign up" />
        </Link>
        <Link to="/login">
          <Button classType="secondary" title="log in" />
        </Link>
      </div>
    </div>
  );
};

export default Splash;
