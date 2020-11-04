import React from 'react';
import PhoneContainer from '../components/phone-container';
import './results.scss';

const Results = () => {
  const popularArtist = [
    {
      id: 1,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
    },
    {
      id: 2,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
    },
    {
      id: 3,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
    },
    {
      id: 4,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
    },
    {
      id: 5,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
    },
    {
      id: 6,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
    },
    {
      id: 7,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
    },
  ];

  return (
    <PhoneContainer tabActive="2">
      <div className="results-page">
        <div className="results-content">
          <div className="header-results-page">
            <h3>Popular artists</h3>
            <div className="popular-artists">
              {popularArtist.map(elem => (
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
};

export default Results;
