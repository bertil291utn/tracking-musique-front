import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from 'store';
import Splash from '../pages/splash';
import SignUp from '../pages/signup';
import styles from './App.module.scss';
import LogIn from '../pages/login';
import LoginRoutes from './LoginRoutes';
import storeKeys from '../assets/storeKeys';
import IsLoggedIn from './IsLoggedIn';

const App = () => {
  const { background } = styles;
  const isLoggedIn = IsLoggedIn();
  // get from redux variable store.get(storeKeys.SET_LOGIN)
  store.set(storeKeys.SET_LOGIN, isLoggedIn);
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

export default App;
