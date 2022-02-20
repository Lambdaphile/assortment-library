import namor from 'namor';

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    scenarioName: namor.generate({ words: 1, numbers: 0 }),
    status: namor.generate({ words: 1, numbers: 0 }),
    description: namor.generate({ words: 1, numbers: 0 }),
    userName: namor.generate({ words: 1, numbers: 0 }),
    createdTime: Math.floor(Math.random() * 100)
  };
};

export function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
