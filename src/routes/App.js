import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from '../pages/splash';
import SignUp from '../pages/signup';
import styles from './App.module.scss';
import LogIn from '../pages/login';
import ArtistsLayout from '../pages/artistsLayout';
import HomeSearch from '../pages/home-search';
import Results from '../pages/results';
import ResultTrack from '../pages/result-tracks';
import ArtistInfo from '../pages/artist-Info';

const App = () => {
  const { background } = styles;
  return (
    <div className={background}>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/search" component={HomeSearch} />
          <Route path="/results/:id" component={ResultTrack} />
          <Route exact path="/results" component={Results} />
          <Route path="/artists/:id" component={ArtistInfo} />
          <Route exact path="/artists" component={ArtistsLayout} />
          <Route exact path="/" component={Splash} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
