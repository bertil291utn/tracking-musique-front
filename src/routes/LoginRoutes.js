import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Artists from '../components/artists';
import isLoggedIn from '../helpers/isLoggedIn';
import HomeSearch from '../pages/home-search';
import Results from '../components/results';
import ArtistInfo from '../pages/artist-Info';
import ResultTrack from '../pages/result-tracks';

const LoginRoutes = () => {
  if (!isLoggedIn()) {
    return <Redirect to="/splash" />;
  }
  return (
    <>
      <Switch>
        <Route path="/artists/search" component={HomeSearch} />
        <Route path="/artists/:id" component={ArtistInfo} />
        <Route path="/artists" component={Artists} />
        <Route path="/results/:id" component={ResultTrack} />
        <Route path="/results" component={Results} />
        <Route path="/" component={Artists} />
      </Switch>
    </>
  );
};

export default LoginRoutes;
