import { getFormatDate, getMonthString } from './date-format';

describe('Date Format', () => {
  test('returns day of the week and date', () => {
    const response = getFormatDate('2020-11-04 11:04:44 UTC');
    expect(response).toMatch(/Wednesday 4/);
  });

  test('returns string month', () => {
    const response = getMonthString(10);
    expect(response).toMatch(/november/);
  });
});
