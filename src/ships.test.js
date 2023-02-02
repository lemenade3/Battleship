// Test Suite for Ship objects

import Ship from "./ships";

test("Ship is an object", () => {
  expect(typeof Ship() === "object").toBeTruthy();
});

test("Ship stores length", () => {
  expect(Ship(4).length).toBe(4);
});

test("Ship hits to be counted", () => {
  expect(Ship(4).hit()).toBe(1);
});

test("Ship hits returns same as timesHit", () => {
  const ship = Ship(4);
  expect(ship.hit()).toBe(ship.timesHit);
});

test("isSunk returns true when timesHit === length", () => {
  const num = 4;
  const ship = Ship(num);
  for (let i = 0; i < num; i += 1) {
    ship.hit();
  }
  expect(ship.isSunk()).toBe(true);
});
