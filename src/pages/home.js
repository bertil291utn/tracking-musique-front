import React from 'react';
import { Link } from 'react-router-dom';
import ArtistItems from '../components/artist-items';
import IconsSvg from '../assets/icons/icons.svg';
import TabNavigation from '../components/tab-navigation';
import './home.scss';

const Home = () => {
  const artistItems = [
    {
      id: 1,
      photoUrl: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      artistName: 'Martin Garrix',
      tracks: 3,
    },
    {
      id: 2,
      photoUrl: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      artistName: 'Dua Lipa',
      tracks: 4,
    },
    {
      id: 3,
      photoUrl: 'https://beatsaver.com/cdn/7d04/99c0882f9d1b22017856ff98cb18aaf994453400.jpg',
      artistName: 'The Weekend',
      tracks: 3,
    },
    {
      id: 4,
      photoUrl: 'https://pbs.twimg.com/profile_images/666578168967512064/VwnIK_32_400x400.png',
      artistName: 'Calvin Harris',
      tracks: 2,
    },
    {
      id: 5,
      photoUrl: 'https://c-sf.smule.com/rs-s80/arr/f7/34/aa701486-ab08-4017-b413-748e1fa8a8a9.jpg',
      artistName: 'Lana del Rey',
      tracks: 9,
    },
    {
      id: 6,
      photoUrl: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      artistName: 'Dua Lipa',
      tracks: 2,
    },
    {
      id: 7,
      photoUrl: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      artistName: 'Dua Lipa',
      tracks: 1,
    },
    {
      id: 8,
      photoUrl: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      artistName: 'Dua Lipa',
      tracks: 9,
    },
  ];

  return (
    <div className="home">
      <div className="container-home">
        <div className="header">
          <svg className="search-icon">
            <use href={`${IconsSvg}#search-symbol`} />
          </svg>
          <h3>MY MUSIC</h3>
        </div>
        <div className="artists-items">
          {artistItems.map(elem => (
            <Link
              key={elem.id}
              to={{
                pathname: `/artists/${elem.id}`,
                state: { ...elem },
              }}
            >
              <ArtistItems
                key={elem.id}
                photoUrl={elem.photoUrl}
                artistName={elem.artistName}
                tracks={elem.tracks}
              />
            </Link>
          ))}
        </div>
      </div>
      <TabNavigation
        active="1"
      />
    </div>
  );
};

export default Home;
