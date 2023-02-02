const makeShip = (length) => {
  let sunk = false;
  let timesHit = 0;

  const hit = () => {
    timesHit += 1;
    return timesHit;
  };

  if (length === timesHit) {
    sunk = true;
  }
  return {
    length,
    get timesHit() {
      return timesHit;
    },
    sunk,
    hit,
  };
};

export default makeShip;
