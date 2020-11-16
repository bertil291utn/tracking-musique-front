import {
  addNewUser,
  checkValidToken,
  setSession,
  getUserArtists,
  getArtist,
  getArtistTopTracks,
  searchArtist,
} from './Api';

describe('API#searchArtist', () => {
  test('should return valid object', async () => {
    const response = await searchArtist('david bowie');
    expect(response instanceof Object).toBe(true);
  });
});

describe('API#getArtistTopTracks', () => {
  test('should return valid object', async () => {
    const response = await getArtistTopTracks('60d24wfXkVzDSfLS6hyCjZ');
    expect(response instanceof Object).toBe(true);
  });
});

describe('API#getArtist', () => {
  test('should return valid object', async () => {
    const response = await getArtist('60d24wfXkVzDSfLS6hyCjZ');
    expect(response instanceof Object).toBe(true);
  });
});

describe('POST#addUser', () => {
  const user = {
    name: 'Bart McCain',
    email: 'bart@email.com',
    password: 'B123456',
  };

  test('should return the name', () => {
    addNewUser(user).then(response => {
      const { data } = response;
      expect(data.data.attributes.name).toEqual(user.name);
    });
  });

  test('should return 200 status', () => {
    addNewUser(user).then(response => {
      const { status } = response;
      expect(status).toEqual(200);
    });
  });
});

describe('POST#checkValidToken', () => {
  test('should a message as valid token ', () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MywiZXhwIjoxNjA0ODAzMzcxfQ.2iTRelH7Jyv2GqaJsFZQwLf7juMaZ8AvLuW7W4fYHUA';
    checkValidToken(token).then(response => {
      const { data } = response;
      expect(data.message).toEqual('Valid token');
    });
  });
});

describe('POST#setSession', () => {
  test('should return same email as argument', () => {
    const user = {
      email: 'bart@email.com',
      password: 'B123456',
    };
    setSession(user).then(response => {
      const { data } = response;
      expect(data.email).toEqual(user.email);
    });
  });
});

describe('GET#getUserArtists', () => {
  test('should return success state', () => {
    getUserArtists(37).then(response => {
      expect(response).toEqual(200);
    });
  });
});
