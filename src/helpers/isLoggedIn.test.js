import isLoggedIn from './isLoggedIn';

describe('isLoggedIn', () => {
  test('should return a boolean value', () => {
    expect(isLoggedIn()).toBeTruthy();
  });
});
