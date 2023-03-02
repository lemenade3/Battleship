import { alertSunkShip } from "./domManipulation";

// Factory function for Ships objects

const Ship = (length, name = "") => {
  let timesHit = 0;

  const hit = () => {
    timesHit += 1;
    return timesHit;
  };

  const isSunk = () => {
    if (length === timesHit) {
      alertSunkShip(name);
      return true;
    }
    return false;
  };

  return {
    length,
    get timesHit() {
      // Allows for Individual Ship objects timesHit to be updated when hit
      return timesHit;
    },
    isSunk,
    hit,
    name,
  };
};

export default Ship;
