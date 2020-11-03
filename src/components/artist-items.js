import React from 'react';
import PropTypes from 'prop-types';
import './artist-items.scss';

const ArtistItems = ({ photoUrl, artistName }) => (
  <div className="container-items">
    <div className="content-items">
      <img src={photoUrl} alt={artistName} />
      <p>{artistName}</p>
    </div>
  </div>
);

ArtistItems.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
};

export default ArtistItems;
