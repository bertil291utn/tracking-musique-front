import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Artists from '../components/artists';
import isLoggedIn from '../helpers/isLoggedIn';
import HomeSearch from './home-search';
import './artistsLayout.scss';

const ArtistsLayout = () => {
  if (!isLoggedIn()) {
    return <Redirect to="/splash" />;
  }
  return (
    <>
      <Switch>
        <Route path="/artists/search" component={HomeSearch} />
        <Route path={['/artists', '/']} component={Artists} />
      </Switch>
    </>
  );
};

export default ArtistsLayout;
