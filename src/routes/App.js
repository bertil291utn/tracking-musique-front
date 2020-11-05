import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from '../pages/splash';
import SignUp from '../pages/signup';
import styles from './App.module.scss';
import LogIn from '../pages/login';
import ArtistsLayout from '../pages/artistsLayout';
import ArtistInfo from '../pages/artist-Info';
import HomeSearch from '../pages/home-search';
import Results from '../pages/results';
import ResultTrack from '../pages/result-tracks';

const App = () => {
  const { background } = styles;
  return (
    <div className={background}>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route path="/artists/:id" component={ArtistInfo} />
          <Route exact path="/search" component={HomeSearch} />
          <Route path="/results/:id" component={ResultTrack} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/splash" component={Splash} />
          <Route exact path="/" component={ArtistsLayout} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
