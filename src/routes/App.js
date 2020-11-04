import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Splash from '../pages/splash';
import SignUp from '../pages/signup';
import styles from './App.module.scss';
import LogIn from '../pages/login';
import Home from '../pages/home';
import ArtistInfo from '../pages/artist-Info';
import HomeSearch from '../pages/home-search';

const App = () => {
  const { background } = styles;
  return (
    <div className={background}>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/artists" component={Home} />
          <Route exact path="/search" component={HomeSearch} />
          <Route path="/artists/:id" component={ArtistInfo} />
          <Route exact path="/" component={Splash} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
