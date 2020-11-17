import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import store from 'store';
import { addUserArtistStats, getArtistTopTracks } from '../logic-operations/Api';
import ArrowBack from '../components/arrow-back';
import PhoneContainer from '../components/phone-container';
import TagMessage from '../components/tag-message';
import storeKeys from '../assets/storeKeys';
import './artist-info.scss';

const ArtistInfo = () => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const playerOptionInitial = { player: false, idTrack: '' };
  const [playerOption, setPlayerOption] = useState(playerOptionInitial);
  const params = useParams();
  const [responseMessage, setResponseMessage] = useState('');
  const location = useLocation();
  const { artist: { id_string: idString, name, photoUrl } } = location;

  useEffect(() => {
    getArtistTopTracks(idString).then(data => {
      if (data !== null) setLoading(false);
      setTracks(data.tracks);
    });
  }, []);

  const playActivated = track => () => {
    const { id, name } = track;
    setPlayerOption({ player: true, idTrack: id });
    addUserArtistStats(id, name, track.duration_ms, params.id, store.get(storeKeys.TOKEN_VAR))
      .then(response => {
        if (response.status === 201) {
          setResponseMessage('stats saved');
        }
      });
  };

  let trackNumber = 0;
  return (
    <PhoneContainer tabActive="1" playerActive={playerOption.player} trackId={playerOption.idTrack}>
      { tracks.length !== 0 && !loading
        && (
          <>
            <div className="header-artist-info">
              <div className="hero-inner" style={{ backgroundImage: `url(${photoUrl})` }} />
              <p>{name}</p>
              <ArrowBack path="/artists" />
            </div>
            <div className="body-artist-info">
              {responseMessage !== '' && (
                <p>Playing track</p>
              )}
              <h3>Popular</h3>
              <div className="popular-items">
                {tracks?.map(elem => {
                  trackNumber += 1;
                  return (
                    <div
                      key={elem.id}
                      className="track-item"
                      onClick={playActivated(elem)}
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

export default ArtistInfo;
