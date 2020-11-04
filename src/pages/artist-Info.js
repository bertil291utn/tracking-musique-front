import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PhoneContainer from '../components/phone-container';
import IconsSvg from '../assets/icons/icons.svg';
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
    height: '200px',
    opacity: '0.5',
  };

  return (
    <PhoneContainer tabActive="1">
      <div className="header-artist-info">
        <div className="hero-inner" style={backgroundImage} />
        <Link to="/artists">
          <svg className="back-arrow-icon">
            <use href={`${IconsSvg}#back-arrow`} />
          </svg>
        </Link>
        <p>{artistName}</p>
      </div>
    </PhoneContainer>
  );
};

ArtistInfo.propTypes = {
  location: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default ArtistInfo;
