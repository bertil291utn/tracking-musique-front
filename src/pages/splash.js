import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
// import store from 'store';
// import storeKeys from '../assets/storeKeys';
import Button from '../components/button';
import styles from './splash.module.scss';

const Splash = ({ login }) => {
  const { background, container } = styles;
  if (login) {
    return <Redirect to="/artists" />;
  }
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

Splash.propTypes = {
  login: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  login: state.login,
});

export default connect(mapStateToProps)(Splash);
