import React from 'react';
import { Link } from 'react-router-dom';
import ArtistItems from '../components/artist-items';
import IconsSvg from '../assets/icons/icons.svg';
import PhoneContainer from '../components/phone-container';
import './home.scss';

const Home = () => {
  const artistItems = [
    {
      id: 1,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1177141140891602944/90VqeVnU.jpg',
      photoUrlCover: 'https://okdiario.com/img/2020/03/25/martin-garrix.jpg',
      artistName: 'Martin Garrix',
      tracks: 3,
      popular: [
        {
          id: 1,
          trackName: 'StarBoy',
          albumImage: 'https://www.elquintobeatle.com/wp-content/uploads/2017/01/the-weeknd-starboy-1.jpg',
        },
        {
          id: 2,
          trackName: 'StarBoy',
          albumImage: 'https://www.elquintobeatle.com/wp-content/uploads/2017/01/the-weeknd-starboy-1.jpg',
        },
        {
          id: 3,
          trackName: 'StarBoy',
          albumImage: 'https://www.elquintobeatle.com/wp-content/uploads/2017/01/the-weeknd-starboy-1.jpg',
        },
      ],
    },
    {
      id: 2,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      photoUrlCover: 'https://okdiario.com/img/2020/03/25/martin-garrix.jpg',
      artistName: 'Dua Lipa',
      tracks: 4,
    },
    {
      id: 3,
      photoUrlIcon: 'https://beatsaver.com/cdn/7d04/99c0882f9d1b22017856ff98cb18aaf994453400.jpg',
      photoUrlCover: 'https://okdiario.com/img/2020/03/25/martin-garrix.jpg',
      artistName: 'The Weekend',
      tracks: 3,
    },
    {
      id: 4,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/666578168967512064/VwnIK_32_400x400.png',
      photoUrlCover: 'https://okdiario.com/img/2020/03/25/martin-garrix.jpg',
      artistName: 'Calvin Harris',
      tracks: 2,
    },
    {
      id: 5,
      photoUrlIcon: 'https://c-sf.smule.com/rs-s80/arr/f7/34/aa701486-ab08-4017-b413-748e1fa8a8a9.jpg',
      photoUrlCover: 'https://okdiario.com/img/2020/03/25/martin-garrix.jpg',
      artistName: 'Lana del Rey',
      tracks: 9,
    },
    {
      id: 6,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      photoUrlCover: 'https://okdiario.com/img/2020/03/25/martin-garrix.jpg',
      artistName: 'Dua Lipa',
      tracks: 2,
    },
    {
      id: 7,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      photoUrlCover: 'https://okdiario.com/img/2020/03/25/martin-garrix.jpg',
      artistName: 'Dua Lipa',
      tracks: 1,
    },
    {
      id: 8,
      photoUrlIcon: 'https://pbs.twimg.com/profile_images/1243465670454632449/Gm06laC1_400x400.jpg',
      photoUrlCover: 'https://okdiario.com/img/2020/03/25/martin-garrix.jpg',
      artistName: 'Dua Lipa',
      tracks: 9,
    },
  ];

  return (
    <PhoneContainer tabActive="1">
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
              photoUrl={elem.photoUrlIcon}
              artistName={elem.artistName}
              tracks={elem.tracks}
            />
          </Link>
        ))}
      </div>
    </PhoneContainer>
  );
};

export default Home;
