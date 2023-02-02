import Gameboard from "./gameboard";

test("Gameboard is an object", () => {
  const gameboard = Gameboard();
  expect(typeof gameboard).toBe("object");
});
