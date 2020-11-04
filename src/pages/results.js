import React from 'react';
import PhoneContainer from '../components/phone-container';
import artistItems from '../assets/artistItems';
import './results.scss';

const Results = () => (
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

      </div>
    </div>
  </PhoneContainer>
);

export default Results;
