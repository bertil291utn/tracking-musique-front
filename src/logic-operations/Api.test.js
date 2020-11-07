import {
  addNewUser, checkValidToken, getToken, getArtist, getArtistTopTracks, searchArtist,
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

describe('API#addUser', () => {
  const user = {
    name: 'Bart McCain',
    email: 'bart@email.com',
    password: 'B123456',
  };

  test('should return the name', () => {
    addNewUser(user).then(response => {
      expect(response.data.data.attributes.name).toEqual(user.name);
    });
  });

  test('should return 200 status', () => {
    addNewUser(user).then(response => {
      expect(response.status).toEqual(200);
    });
  });
});

describe('API#checkValidToken', () => {
  test('should a message as valid token ', () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0MywiZXhwIjoxNjA0ODAzMzcxfQ.2iTRelH7Jyv2GqaJsFZQwLf7juMaZ8AvLuW7W4fYHUA';
    checkValidToken(token).then(response => {
      expect(response.message).toEqual('Valid token');
    });
  });
});

describe('API#getToken', () => {
  test('should return same email as argument', () => {
    const user = {
      email: 'bart@email.com',
      password: 'B123456',
    };
    getToken(user).then(response => {
      expect(response.email).toEqual(user.email);
    });
  });
});
