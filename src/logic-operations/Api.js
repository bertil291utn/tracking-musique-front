import SpotifyWebApi from 'spotify-web-api-js';

const TOKEN_VAR = 'temp_token_spotify';

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

const setTokenLocalStorage = async () => {
  const token = await getSpotifyToken();
  localStorage.setItem(TOKEN_VAR, token.access_token);
};

const checkSpotifyToken = async (token = localStorage.getItem(TOKEN_VAR)) => {
  const spotifyApi = new SpotifyWebApi();
  if (!token) await setTokenLocalStorage();
  spotifyApi.setAccessToken(localStorage.getItem(TOKEN_VAR));

  try {
    await spotifyApi.searchTracks('test');
  } catch (error) {
    const response = JSON.parse(error.response);
    if (response.error.message === 'The access token expired' && response.error.status === 401) {
      await setTokenLocalStorage();
      checkSpotifyToken();
    }
  }
  return spotifyApi;
};

const searchArtist = async artistName => {
  const spotifyApi = await checkSpotifyToken();
  let data;
  try {
    data = await spotifyApi.searchArtists(artistName);
  } catch (error) {
    data = error;
  }

  return data;
};

export default searchArtist;
