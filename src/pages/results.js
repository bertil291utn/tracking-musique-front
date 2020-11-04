import React from 'react';
import PhoneContainer from '../components/phone-container';
import artistItems from '../assets/artistItems';
import './results.scss';

const Results = () => {
  const styles = {
    background: 'red',
  };

  return (
    <PhoneContainer tabActive="2">
      <div className="results-page">
        <div className="results-content">
          <div className="header-results-page">
            <h3>Popular artists</h3>
            <div className="popular-artists">
              {artistItems.map(elem => (
                <div key={elem.id} className="popular-artists-element">
                  <img src={elem.photoUrlIcon} width="68" alt={elem.artistName} />
                  <p>{elem.artistName}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="body-results-page">
            {artistItems.map(elem => (
              <div key={elem.id} style={styles} className="card-artist-container">
                <div className="card-artist-content">
                  <img src={elem.photoUrlIcon} alt={elem.artistName} width="120" />
                  <div className="info-artista">
                    <h3>{elem.artistName}</h3>
                    <div className="stats">
                      <div className="stream">
                        <span>STREAMS</span>
                        <p>{elem.stats.streams}</p>
                      </div>
                      <div className="hours">
                        <span>HOURS</span>
                        <p>{elem.stats.hours}</p>
                      </div>
                      <div className="days">
                        <span>DAYS</span>
                        <p>{elem.stats.days}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneContainer>
  );
};

export default Results;
