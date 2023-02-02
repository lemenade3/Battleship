import makeShip from "./ships";

test("Ship is an object", () => {
  expect(typeof makeShip() === "object").toBeTruthy();
});

test("Ship stores length", () => {
  expect(makeShip(4).length).toBe(4);
});

test("Ship hits to be counted", () => {
  expect(makeShip(4).hit()).toBe(1);
});

test("Ship hits returns same as timesHit", () => {
  const ship = makeShip(4);
  expect(ship.hit()).toBe(ship.timesHit);
});

test("isSunk returns true when timesHit === length", () => {
  const num = 4;
  const ship = makeShip(num);
  for (let i = 0; i < num; i += 1) {
    ship.hit();
  }
  expect(ship.isSunk()).toBe(true);
});
