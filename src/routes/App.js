import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setLogin, setUser } from '../redux/actions';

import Splash from '../pages/splash';
import SignUp from '../pages/signup';
import styles from './App.module.scss';
import LogIn from '../pages/login';
import LoginRoutes from './LoginRoutes';
import IsLoggedIn from './IsLoggedIn';

const App = ({
  setLogin, setUser,
}) => {
  const { background } = styles;
  const isLoggedIn = IsLoggedIn();
  setLogin(isLoggedIn.login);
  setUser(isLoggedIn.data.userId);
  return (
    <div className={background}>
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/splash" component={Splash} />
          <Route path="/" component={LoginRoutes} />
        </Switch>
      </Router>
    </div>
  );
};

App.propTypes = {
  setLogin: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  setLogin,
  setUser,
};

export default connect(null, mapDispatchToProps)(App);
