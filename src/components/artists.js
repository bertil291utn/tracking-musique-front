import React from 'react';
import { Link, Route } from 'react-router-dom';
import ArtistItems from './artist-items';
import IconsSvg from '../assets/icons/icons.svg';
import PhoneContainer from './phone-container';
import artistItems from '../assets/artistItems';
import ArtistInfo from '../pages/artist-Info';
import './artists.scss';

const Artists = () => (
  <PhoneContainer tabActive="1">
    <Route path="/artists/:artistId" component={ArtistInfo} />
    <div className="header">
      <Link to="/artists/search">
        <svg className="search-icon">
          <use href={`${IconsSvg}#search-symbol`} />
        </svg>
      </Link>
      <h3>MY MUSIC</h3>
    </div>
    <div className="artists-items">
      {artistItems.map(elem => (
        <Link
          key={elem.id}
          to={{
            pathname: `/artists/${elem.id}`,
            state: { ...elem },
          }}
        >
          <ArtistItems
            photoUrl={elem.photoUrlIcon}
            artistName={elem.artistName}
            tracks={elem.tracks}
          />
        </Link>
      ))}
    </div>
  </PhoneContainer>
);

export default Artists;
