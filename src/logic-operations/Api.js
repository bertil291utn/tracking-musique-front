import SpotifyWebApi from 'spotify-web-api-js';

const BASE_URL = 'http://127.0.0.1:3030/api/v1';

const getSpotifyToken = async () => {
  const myHeaders = new Headers();
  const basic = `Basic ${btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`)}`;
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Authorization', basic);

  const urlencoded = new URLSearchParams();
  urlencoded.append('grant_type', 'client_credentials');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  const baseURL = 'https://accounts.spotify.com/api/token';
  const response = await fetch(baseURL, requestOptions);

  return response.json();
};

const initSpotifyObject = async () => {
  const spotifyApi = new SpotifyWebApi();
  const token = await getSpotifyToken();
  await spotifyApi.setAccessToken(token.access_token);
  return spotifyApi;
};

const searchArtist = async artistName => {
  let response;
  const spotifyApi = await initSpotifyObject();
  try {
    response = await spotifyApi.searchArtists(artistName);
  } catch (error) {
    response = error;
  }
  return response;
};

const getArtist = async artistId => {
  let response;
  const spotifyApi = await initSpotifyObject();
  try {
    response = await spotifyApi.getArtist(artistId);
  } catch (error) {
    response = error;
  }
  return response;
};

const getArtists = async artistsIdArray => {
  let response;
  const spotifyApi = await initSpotifyObject();
  try {
    response = await spotifyApi.getArtists(artistsIdArray);
  } catch (error) {
    response = error;
  }
  return response;
};

const getArtistTopTracks = async artistId => {
  let response;
  const spotifyApi = await initSpotifyObject();
  try {
    response = await spotifyApi.getArtistTopTracks(artistId, 'ES');
  } catch (error) {
    response = error;
  }
  return response;
};

const addNewUser = async ({ name, email, password }) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const body = JSON.stringify({
    user: {
      name, email, password,
    },
  });

  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };

  const url = `${BASE_URL}/users`;
  const response = await fetch(url, requestOptions);
  const data = await response?.json();
  return { data, status: response.status };
};

const checkValidToken = async token => {
  const headers = new Headers();
  headers.append('Authorization', token);

  const requestOptions = {
    method: 'POST',
    headers,
    redirect: 'follow',
  };

  const url = `${BASE_URL}/valid_token`;
  const response = await fetch(url, requestOptions);
  const data = await response?.json();
  return { data, status: response.status };
};

const getToken = async ({ email, password }) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const raw = JSON.stringify({ user: { email, password } });

  const requestOptions = {
    method: 'POST',
    headers,
    body: raw,
    redirect: 'follow',
  };
  const url = `${BASE_URL}/tokens`;
  const response = await fetch(url, requestOptions);
  const data = await response?.json();
  return { data, status: response.status };
};

const getUserArtists = async userId => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const url = `${BASE_URL}/user_artists/${userId}`;
  const response = await fetch(url, requestOptions);
  const data = await response?.json();
  return { data, status: response.status };
};

const addUserArtist = async (idString, name, photoUrl, token) => {
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ artist: { id_string: idString, name, photoUrl } });

  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };
  const url = `${BASE_URL}/artists`;
  const response = await fetch(url, requestOptions);
  const data = await response?.json();
  return { data, status: response.status };
};

const addUserArtistStats = async (spotifyTrackId, trackName, hours, idString, token) => {
  const headers = new Headers();
  headers.append('Authorization', token);
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    stat: {
      hours, track_name: trackName, spotify_track_id: spotifyTrackId,
    },
    id_string: idString,
  });

  const requestOptions = {
    method: 'POST',
    headers,
    body,
    redirect: 'follow',
  };
  const url = `${BASE_URL}/stats`;
  const response = await fetch(url, requestOptions);
  const data = await response?.json();
  return { data, status: response.status };
};

const getArtistStats = async idArtist => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const url = `${BASE_URL}/artists/${idArtist}`;
  const response = await fetch(url, requestOptions);
  const data = await response?.json();
  return { data, status: response.status };
};

const getUserArtistStats = async userToken => {
  const headers = new Headers();
  headers.append('Authorization', userToken);

  const requestOptions = {
    method: 'GET',
    headers,
    redirect: 'follow',
  };

  const url = `${BASE_URL}/user_artist_stats`;
  const response = await fetch(url, requestOptions);
  const data = await response?.json();
  return { data, status: response.status };
};

export {
  addUserArtistStats,
  addUserArtist,
  addNewUser,
  checkValidToken,
  getArtistStats,
  getToken,
  getUserArtists,
  getUserArtistStats,
  getArtist,
  getArtists,
  getArtistTopTracks,
  searchArtist,
};
