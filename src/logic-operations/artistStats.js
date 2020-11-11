import sumTotal from './sumTotal';

const statsToDeal = (artistsIncluded, statsArray) => artistsIncluded
  .filter(stat => statsArray.some(elem => elem.id === stat.id));

const mostCommonDays = arr1 => {
  let mf = 1;
  let m = 0;
  let item;
  if (arr1.length !== 1) {
    for (let i = 0; i < arr1.length; i += 1) {
      for (let j = i; j < arr1.length; j += 1) {
        const { attributes: { created_at: createAt1 } } = arr1[i];
        const { attributes: { created_at: createAt2 } } = arr1[j];
        if (createAt1 === createAt2) m += 1;
        if (mf < m) {
          mf = m;
          item = arr1[i];
        }
      }
      m = 0;
    }
  } else {
    const [first] = arr1;
    item = first;
  }

  return item;
};

export const hours = (artistsIncluded, statsArray) => {
  const millisecToHours = 3600000;
  return `${(sumTotal(statsToDeal(artistsIncluded, statsArray)) / millisecToHours).toFixed(2)}`;
};

export const days = (artistsIncluded, statsArray) => {
  let statsToDealTemp = statsToDeal(artistsIncluded, statsArray);
  statsToDealTemp = statsToDealTemp
    .map(elem => {
      const { attributes } = elem;
      const { attributes: { created_at: createdAt } } = elem;
      return {
        ...elem,
        attributes: {
          ...attributes, created_at: new Date(createdAt).getDay(), created_at_string: createdAt,
        },
      };
    });
  const commonDay = mostCommonDays(statsToDealTemp)?.attributes.created_at;
  const days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
  return `${days[commonDay]}`;
};
