import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getArtist, getArtistTopTracks } from '../logic-operations/Api';
import ArrowBack from '../components/arrow-back';
import PhoneContainer from '../components/phone-container';
import TagMessage from '../components/tag-message';
import './artist-info.scss';

const ArtistInfo = ({ match }) => {
  const { params } = match;
  const [loading, setLoading] = useState(true);
  const [artist, setArtist] = useState([]);
  const [tracks, setTracks] = useState([]);
  const playerOptionInitial = { player: false, idTrack: '' };
  const [playerOption, setPlayerOption] = useState(playerOptionInitial);

  useEffect(() => {
    Promise.all([getArtist(params.id), getArtistTopTracks(params.id)]).then(data => {
      if (data !== null) setLoading(false);
      setArtist(data[0]);
      setTracks(data[1].tracks);
    });
  }, []);

  const playActivated = trackId => () => {
    setPlayerOption({ player: true, idTrack: trackId });
  };

  let trackNumber = 0;
  const artistTracks = artist.length !== 0 && tracks.length !== 0;
  return (
    <PhoneContainer tabActive="1" playerActive={playerOption.player} trackId={playerOption.idTrack}>
      {artistTracks && !loading
        && (
          <>
            <div className="header-artist-info">
              <div className="hero-inner" style={{ backgroundImage: `url(${artist.images?.[0].url})` }} />
              <p>{artist.name}</p>
              <ArrowBack path="/artists" />
            </div>
            <div className="body-artist-info">
              <h3>Popular</h3>
              <div className="popular-items">
                {tracks?.map(elem => {
                  trackNumber += 1;
                  return (
                    <div
                      key={elem.id}
                      className="track-item"
                      onClick={playActivated(elem.id)}
                      onKeyUp={() => { }}
                      role="button"
                      tabIndex="0"
                    >
                      <span>{trackNumber}</span>
                      <img
                        src={elem.album.images?.[elem.album.images.length - 1].url}
                        alt={elem.trackName}
                        width="45"
                      />
                      <p>{elem.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      {loading
        && (
          <TagMessage title="Loading..." />
        )}
    </PhoneContainer>
  );
};

ArtistInfo.propTypes = {
  match: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};
export default ArtistInfo;
