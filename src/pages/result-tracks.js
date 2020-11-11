import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowBack from '../components/arrow-back';
import IconsSvg from '../assets/icons/icons.svg';
import PhoneContainer from '../components/phone-container';
import { getFormatDate, getMonthString } from '../logic-operations/date-format';
import './result-tracks.scss';
import { getArtistStats } from '../logic-operations/Api';
import toMillisec from '../logic-operations/toMillisec';
import TagMessage from '../components/tag-message';
import groupBy from '../logic-operations/groupBy';
import makeArray from '../logic-operations/makeArray';
import sumTotal from '../logic-operations/sumTotal';

const ResultTrack = () => {
  const params = useParams();
  const [date, setDate] = useState(new Date().getMonth());
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const setDatesFunction = click => {
    if (click === 1 && date !== 0) {
      setDate(date - 1);
    } else if (click === 2 && date !== 11) {
      setDate(date + 1);
    }
  };

  useEffect(() => {
    getArtistStats(params.id).then(response => {
      if (response.status === 200) {
        setLoading(false);
        let statsGrouped = groupBy(response.data.included, 'spotify_track_id');
        statsGrouped = makeArray(statsGrouped);
        setStats({ name: response.data.data.attributes.name, included: statsGrouped });
      }
    });
  }, []);

  return (
    <PhoneContainer tabActive="2">
      {stats.length !== 0 && !loading
        ? (
          <div className="result-track-container">
            <div className="result-track-content">
              <div className="header result-track-content-header">
                <ArrowBack path="/results" />
              </div>
              <div className="result-track-content-body">
                <h2>{stats.name}</h2>
                <div className="pick-date">
                  <div
                    className="left-arrow"
                    onClick={() => setDatesFunction(1)}
                    onKeyUp={() => { }}
                    role="button"
                    tabIndex="0"
                  >
                    <svg className="icon left-arrow-icon">
                      <use href={`${IconsSvg}#back-arrow`} />
                    </svg>
                  </div>
                  <div className="text-date">{getMonthString(date)?.toUpperCase()}</div>
                  <div
                    className="right-arrow"
                    onClick={() => setDatesFunction(2)}
                    onKeyUp={() => { }}
                    role="button"
                    tabIndex="0"
                  >
                    <svg className="icon right-arrow-icon">
                      <use href={`${IconsSvg}#back-arrow`} />
                    </svg>
                  </div>
                </div>
                <div className="result-tracking-info">
                  {stats.included.map(elem => {
                    const { track } = elem;
                    const { attributes } = track[0];
                    return (
                      <div key={track[0].id} className="result-tracking-item">
                        <div className="date">
                          <h4>{getFormatDate(attributes.created_at)}</h4>
                          <p>{attributes.track_name}</p>
                        </div>
                        <div className="hours">
                          <p>{`${toMillisec(sumTotal(track))}`}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <TagMessage title="Loading..." />
        )}
    </PhoneContainer>
  );
};

export default ResultTrack;
