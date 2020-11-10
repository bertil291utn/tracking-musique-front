import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PhoneContainer from './phone-container';
import TagMessage from './tag-message';
import { getArtists, getUserArtists } from '../logic-operations/Api';
import './results.scss';

const searchId = (idString, trackArray) => trackArray.find(elem => elem.idString === idString);

const Results = ({ user }) => {
  const [artists, setArtists] = useState([]);
  const [idStrings, setIdStrings] = useState([]);
  const [loadingArtists, setLoadingArtists] = useState(true);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (user !== 0) {
      getUserArtists(user)
        .then(response => response.data.included.map(tracks => (
          { id: tracks.id, idString: tracks.attributes.id_string }
        )))
        .then(tracks => {
          setTracks(tracks);
          return tracks.map(track => track.idString);
        })
        .then(idString => {
          if (idString.length !== 0) {
            setIdStrings(idString);
            getArtists(idString).then(response => {
              setArtists(response.artists);
              setLoadingArtists(false);
            });
          } else setLoadingArtists(false);
        });
    }
  }, [user]);

  const arrayColors = ['colorPink', 'colorLettuce', 'colorDark', 'colorGreen'];
  let arrayColorsIndex = -1;
  return (
    <PhoneContainer tabActive="2">
      {idStrings.length !== 0 && !loadingArtists
        && (
          <div className="results-page">
            <div className="results-content">
              <div className="header-results-page">
                <h3>Popular artists</h3>
                <div className="popular-artists">
                  {artists.map(elem => (
                    <div key={elem.id} className="popular-artists-element">
                      <img src={elem.images?.[elem.images.length - 1].url} width="68" alt={elem.name} />
                      <p>{elem.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="body-results-page">
                {artists.map((elem, index) => {
                  if (index === arrayColors.length) arrayColorsIndex = -1;
                  arrayColorsIndex += 1;
                  return (
                    <Link
                      key={elem.id}
                      to={`/results/${searchId(elem.id, tracks).id}`}
                    >
                      <div id={arrayColors[arrayColorsIndex]} className="card-artist-container">
                        <div className="card-artist-content">
                          <img src={elem.images?.[elem.images.length - 1].url} alt={elem.name} width="120" />
                          <div className="info-artista">
                            <h3>{elem.name}</h3>
                            <div className="stats">
                              <div className="stream">
                                <span>STREAMS</span>
                                <p>10</p>
                              </div>
                              <div className="hours">
                                <span>HOURS</span>
                                <p>10</p>
                              </div>
                              <div className="days">
                                <span>DAYS</span>
                                <p>MON</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      {
        idStrings.length === 0 && loadingArtists
        && (
          <TagMessage title="Loading..." />
        )
      }
      {
        idStrings.length === 0 && !loadingArtists
        && (
          <TagMessage
            title="No data available"
            subtitle="Search your favorite artist"
          />
        )
      }
    </PhoneContainer>
  );
};

Results.propTypes = {
  user: PropTypes.number,
};

Results.defaultProps = {
  user: 0,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Results);
