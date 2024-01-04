import { cityCoordinates } from "./cityCoordinates";

jest.mock("./cityCoordinates", () => {
  return {
    cityCoordinates: jest.fn().mockReturnValue([12.412, 41.412]),
  };
});

test("test for cityCoordinates.js", () => {
  expect(cityCoordinates("Rome")).toStrictEqual([12.412, 41.412]);
});
