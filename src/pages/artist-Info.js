import React from 'react';
import PropTypes from 'prop-types';
// import './artist-info.scss';

const ArtistInfo = ({ location }) => {
  const { state } = location;
  const {
    id,
    photoUrl,
    artistName,
    tracks,
  } = state;

  return (
    <div className="artist-info-container">
      <div className="artist-info-content">
        <h1>Artist info</h1>
        <p>{id}</p>
        <p>{artistName}</p>
        <p>{photoUrl}</p>
        <p>{tracks}</p>
      </div>
    </div>
  );
};

ArtistInfo.propTypes = {
  location: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default ArtistInfo;
