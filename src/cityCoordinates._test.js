import { cityCoordinates } from "./cityCoordinates";

function mockFetch(result) {
  window.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(result),
    });
}

describe("test for cityCoordinates.js", () => {
  mockFetch([37.617698, 55.755864]);
  expect(cityCoordinates()).toStrictEqual([37.617698, 55.755864]);
});
