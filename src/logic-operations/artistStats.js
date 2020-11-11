/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import sumTotal from './sumTotal';

export const hours = (artistsIncluded, statsArray) => {
  const statsToDeal = artistsIncluded
    .filter(stat => statsArray.some(elem => elem.id === stat.id));
  const millisecToHours = 3600000;
  return `${(sumTotal(statsToDeal) / millisecToHours).toFixed(2)}`;
};
