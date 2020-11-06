import SpotifyWebApi from 'spotify-web-api-js';

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

export { getArtistTopTracks, searchArtist };
