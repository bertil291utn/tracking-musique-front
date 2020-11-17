import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from 'store';
import { setLogin, setUser } from '../redux/actions';

import Splash from '../pages/splash';
import SignUp from '../pages/signup';
import styles from './App.module.scss';
import LogIn from '../pages/login';
import LoginRoutes from './LoginRoutes';
import storeKeys from '../assets/storeKeys';
import { checkValidToken } from '../logic-operations/Api';

const App = ({
  setLogin, setUser,
}) => {
  const { background } = styles;
  useEffect(() => {
    const token = store.get(storeKeys.TOKEN_VAR);
    setLogin(!!token);
    if (token) {
      checkValidToken(token).then(response => {
        if (response.status === 200) {
          setLogin(true);
          setUser(response.data.userId);
        } else {
          setLogin(false);
          store.remove(storeKeys.TOKEN_VAR);
        }
      });
    } else setLogin(false);
  }, []);
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
