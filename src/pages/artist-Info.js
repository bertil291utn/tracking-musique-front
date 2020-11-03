import React from 'react';
import PropTypes from 'prop-types';
import PhoneContainer from '../components/phone-container';
import './artist-info.scss';

const ArtistInfo = ({ location }) => {
  const { state } = location;
  const {
    photoUrlCover,
    artistName,
  } = state;

  const backgroundImage = {
    background: `url(${photoUrlCover})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '300px',
  };

  return (
    <PhoneContainer tabActive="1">
      <div className="header-artist-info">
        <div className="hero-inner" style={backgroundImage} />
        <p>{artistName}</p>
      </div>
    </PhoneContainer>
  );
};

ArtistInfo.propTypes = {
  location: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default ArtistInfo;
