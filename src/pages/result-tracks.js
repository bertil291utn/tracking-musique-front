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

const checkArgMonth = (dateString, argMonth) => {
  let response = false;
  const date = new Date(dateString);
  const month = date.getMonth();
  if (month === argMonth) response = true;
  return response;
};

const getbyDate = (statsGroupedArray, checkDate) => statsGroupedArray.map(
  elem => ({
    track: elem.track.filter(elem => {
      const { attributes: { created_at: createdAt } } = elem;
      return checkArgMonth(createdAt, checkDate);
    }),
  }),
);

const ResultTrack = () => {
  const params = useParams();
  const [date, setDate] = useState(new Date().getMonth());
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statsGroup, setStatsGroup] = useState([]);

  const setDatesFunction = click => {
    let dateLoc;
    if (click === 1 && date !== 0) {
      setDate(date - 1);
      dateLoc = date - 1;
    } else if (click === 2 && date !== 11) {
      setDate(date + 1);
      dateLoc = date + 1;
    }
    if (date <= new Date().getMonth()) {
      const included = getbyDate(statsGroup, dateLoc);
      setStats({ ...stats, included });
    }
  };

  useEffect(() => {
    getArtistStats(params.id).then(response => {
      if (response.status === 200) {
        setLoading(false);
        let statsGrouped = groupBy(response.data.included, 'spotify_track_id');
        statsGrouped = makeArray(statsGrouped);
        const { data: { data: { attributes: { name } } } } = response;
        setStatsGroup(statsGrouped);
        const included = getbyDate(statsGrouped, date);
        setStats({ name, included });
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
                  {stats.included.filter(elem => elem.track.length !== 0).map(elem => {
                    const { track } = elem;
                    const { attributes } = track?.[0];
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
