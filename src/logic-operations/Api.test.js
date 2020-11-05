import searchArtist from './Api';

describe('test', () => {
  test('returns valid object', async () => {
    const response = await searchArtist('david bowie');
    expect(response instanceof Object).toBe(true);
  });
});
