import {
  addNewUser, getArtist, getArtistTopTracks, searchArtist,
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
  test('should return the name', () => {
    const user = {
      name: 'Bart McCain',
      email: 'bart@email.com',
      password: 'B123456',
    };
    const { name, email, password } = user;
    addNewUser(name, email, password).then(response => {
      expect(response.data.attributes.name).toEqual(name);
    });
  });
});
