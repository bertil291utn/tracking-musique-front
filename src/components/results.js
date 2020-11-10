import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import PhoneContainer from './phone-container';
import TagMessage from './tag-message';
import { getUserArtistStats } from '../logic-operations/Api';
import './results.scss';
import storeKeys from '../assets/storeKeys';

const Results = () => {
  const [artists, setArtists] = useState([]);
  const [loadingArtists, setLoadingArtists] = useState(true);

  useEffect(() => {
    getUserArtistStats(store.get(storeKeys.TOKEN_VAR))
      .then(response => {
        if (response.status === 200) {
          setLoadingArtists(false);
          setArtists(response.data.data);
        }
      });
  }, []);

  const arrayColors = ['colorPink', 'colorLettuce', 'colorDark', 'colorGreen'];
  let arrayColorsIndex = -1;
  return (
    <PhoneContainer tabActive="2">
      {artists.length !== 0 && !loadingArtists
        && (
          <div className="results-page">
            <div className="results-content">
              <div className="header-results-page">
                <h3>Popular artists</h3>
                <div className="popular-artists">
                  {artists.map(elem => {
                    const { attributes } = elem;
                    return (
                      <div key={elem.id} className="popular-artists-element">
                        <img src={attributes.photoUrl} width="68" alt={attributes.name} />
                        <p>{attributes.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="body-results-page">
                {artists.map((elem, index) => {
                  if (index === arrayColors.length) arrayColorsIndex = -1;
                  arrayColorsIndex += 1;
                  const { attributes } = elem;
                  return (
                    <Link
                      key={elem.id}
                      to={`/results/${elem.id}`}
                    >
                      <div id={arrayColors[arrayColorsIndex]} className="card-artist-container">
                        <div className="card-artist-content">
                          <img src={attributes.photoUrl} alt={attributes.name} width="120" />
                          <div className="info-artista">
                            <h3>{attributes.name}</h3>
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
        artists.length === 0 && loadingArtists
        && (
          <TagMessage title="Loading..." />
        )
      }
      {
        artists.length === 0 && !loadingArtists
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

export default Results;
