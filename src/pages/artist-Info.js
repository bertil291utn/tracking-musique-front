import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getArtist, getArtistTopTracks } from '../logic-operations/Api';
import ArrowBack from '../components/arrow-back';
import PhoneContainer from '../components/phone-container';
import './artist-info.scss';

const ArtistInfo = ({ match }) => {
  const { params } = match;
  const [artist, setArtist] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    Promise.all([getArtist(params.id), getArtistTopTracks(params.id)]).then(data => {
      setArtist(data[0]);
      setTracks(data[1].tracks);
    });
  }, []);

  let trackNumber = 0;
  return (
    <PhoneContainer tabActive="1">
      <div className="header-artist-info">
        <div className="hero-inner" style={{ backgroundImage: `url(${artist.images?.[0].url})` }} />
        <ArrowBack path="/artists" />
        <p>{artist.name}</p>
      </div>
      <div className="body-artist-info">
        <h3>Popular</h3>
        <div className="popular-items">
          {tracks?.map(elem => {
            trackNumber += 1;
            return (
              <div key={elem.id} className="track-item">
                <span>{trackNumber}</span>
                <img src={elem.album.images?.[elem.album.images.length - 1].url} alt={elem.trackName} width="45" />
                <p>{elem.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </PhoneContainer>
  );
};

ArtistInfo.propTypes = {
  match: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default ArtistInfo;
