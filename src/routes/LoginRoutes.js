import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import store from 'store';
import Artists from '../components/artists';
import HomeSearch from '../pages/home-search';
import Results from '../components/results';
import ArtistInfo from '../pages/artist-Info';
import ResultTrack from '../pages/result-tracks';
import storeKeys from '../assets/storeKeys';

const LoginRoutes = () => {
  // get from redux variable store.get(storeKeys.SET_LOGIN)
  if (!store.get(storeKeys.SET_LOGIN)) {
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
