import React from 'react';
import PropTypes from 'prop-types';
import ArrowBack from '../components/arrow-back';
import IconsSvg from '../assets/icons/icons.svg';
import PhoneContainer from '../components/phone-container';
import './result-tracks.scss';

const ResultTrack = ({ location }) => {
  const { state } = location;
  console.log(state);
  const {
    artistName,
    tracking,
  } = state;
  return (
    <PhoneContainer tabActive="2">
      <div className="result-track-container">
        <div className="result-track-content">
          <div className="header result-track-content-header">
            <ArrowBack path="/results" />
          </div>
          <div className="result-track-content-body">
            <h2>{artistName}</h2>
            <div className="pick-date">
              <div className="left-arrow">
                <svg className="icon left-arrow-icon">
                  <use href={`${IconsSvg}#back-arrow`} />
                </svg>
              </div>
              <div className="text-date">TODAY</div>
              <div className="right-arrow">
                <svg className="icon right-arrow-icon">
                  <use href={`${IconsSvg}#back-arrow`} />
                </svg>
              </div>
            </div>
            {tracking.map(elem => (
              <div key={elem.id} className="result-tracking-item">
                <div className="date">
                  <h4>{elem.date}</h4>
                  <p>{elem.trackName}</p>
                </div>
                <div className="hours">
                  <p>{`${elem.hours}h`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PhoneContainer>
  );
};

ResultTrack.propTypes = {
  location: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ResultTrack;
