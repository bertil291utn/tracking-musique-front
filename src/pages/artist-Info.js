import React from 'react';
import PropTypes from 'prop-types';
import './artist-info.scss';

const ArtistInfo = ({ location }) => {
  const { state } = location;
  const {
    photoUrl,
    artistName,
  } = state;

  return (
    <div className="artist-info-container">
      <div className="artist-info-content">
        <div className="header-artist-info">
          <img src={photoUrl} alt={artistName} />
          <p>{artistName}</p>
        </div>
      </div>
    </div>
  );
};

ArtistInfo.propTypes = {
  location: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default ArtistInfo;
