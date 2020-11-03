import React from 'react';
import PropTypes from 'prop-types';
import './artist-items.scss';

const ArtistItems = ({ photoUrl, artistName, tracks }) => (
  <div className="container-items">
    <div className="content-items">
      <img src={photoUrl} alt={artistName} />
      <div className="info-items">
        <p className="title">{artistName}</p>
        <p className="subtitle">{` ${tracks} songs`}</p>
      </div>
    </div>
  </div>
);

ArtistItems.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  tracks: PropTypes.number.isRequired,
};

export default ArtistItems;
