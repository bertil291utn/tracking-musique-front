import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from '../pages/splash';
import SignUp from '../pages/signup';
import styles from './App.module.scss';
import LogIn from '../pages/login';
import ArtistsLayout from '../pages/artistsLayout';
import Results from '../pages/results';
import ResultTrack from '../pages/result-tracks';

const App = () => {
  const { background } = styles;
  return (
    <div className={background}>
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/results/:id" component={ResultTrack} />
          <Route path="/results" component={Results} />
          <Route path="/splash" component={Splash} />
          <Route path="/" component={ArtistsLayout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
