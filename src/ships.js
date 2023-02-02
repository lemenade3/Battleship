const makeShip = (length) => {
  let timesHit = 0;

  const hit = () => {
    timesHit += 1;
    return timesHit;
  };

  const isSunk = () => {
    if (length === timesHit) {
      return true;
    }
    return false;
  };

  return {
    length,
    get timesHit() {
      return timesHit;
    },
    isSunk,
    hit,
  };
};

export default makeShip;
