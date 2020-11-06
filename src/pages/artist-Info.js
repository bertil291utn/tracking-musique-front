import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getArtistTopTracks } from '../logic-operations/Api';
import ArrowBack from '../components/arrow-back';
import PhoneContainer from '../components/phone-container';
import './artist-info.scss';

const ArtistInfo = ({ match }) => {
  const { params } = match;

  useEffect(() => {
    getArtistTopTracks(params.id).then(data => {
      console.log(data);
    });
  }, []);

  const backgroundImage = {
    // background: `url(${photoUrlCover})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '200px',
    opacity: '0.5',
  };

  return (
    <PhoneContainer tabActive="1">
      <div className="header-artist-info">
        <div className="hero-inner" style={backgroundImage} />
        <ArrowBack path="/artists" />
        {/* <p>{artistName}</p> */}
      </div>
      <div className="body-artist-info">
        <h3>Popular</h3>
        <div className="popular-items">
          {/* {popular.map(elem => (
            <div key={elem.id} className="track-item">
              <span>{elem.id}</span>
              <img src={elem.albumImage} alt={elem.trackName} width="45" />
              <p>{elem.trackName}</p>
            </div>
          ))} */}
        </div>
      </div>
    </PhoneContainer>
  );
};

ArtistInfo.propTypes = {
  match: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default ArtistInfo;
