import { getArtistTopTracks, searchArtist } from './Api';

describe('API#searchArtist', () => {
  test('returns valid object', async () => {
    const response = await searchArtist('david bowie');
    expect(response instanceof Object).toBe(true);
  });
});

describe('API#getArtistTopTracks', () => {
  test('returns valid object', async () => {
    const response = await getArtistTopTracks('60d24wfXkVzDSfLS6hyCjZ');
    expect(response instanceof Object).toBe(true);
  });
});
