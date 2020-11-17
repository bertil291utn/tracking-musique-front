import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import PhoneContainer from './phone-container';
import TagMessage from './tag-message';
import { getUserArtistStats } from '../logic-operations/Api';
import storeKeys from '../assets/storeKeys';
import './results.scss';
import { days, hours } from '../logic-operations/artistStats';

const Results = () => {
  const [artists, setArtistsData] = useState([]);
  const [artistsIncluded, setArtistsIncluded] = useState([]);
  const [loadingArtists, setLoadingArtists] = useState(true);

  useEffect(() => {
    getUserArtistStats(store.get(storeKeys.TOKEN_VAR))
      .then(response => {
        if (response.status === 200) {
          setLoadingArtists(false);
          setArtistsData(response.data.data);
          setArtistsIncluded(response.data.included);
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
                  const { relationships: { stats: { data: statsData } } } = elem;
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
                                <p>{statsData.length}</p>
                              </div>
                              <div className="hours">
                                <span>HOURS</span>
                                <p>{hours(artistsIncluded, statsData)}</p>
                              </div>
                              <div className="days">
                                <span>DAYS</span>
                                <p>{days(artistsIncluded, statsData).toUpperCase()}</p>
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
