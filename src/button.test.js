import { addButton, addButtonReload } from "./button";
import { showWeather } from "./weather";
// import { cityCoordinates } from "./cityCoordinates";
beforeEach(() => {
  document.body.innerHTML = "";
  const list = document.createElement("div");
  list.className = "list";
  document.body.append(list);
  const map = document.createElement("img");
  map.className = "map";
  document.body.append(map);
});
jest.mock("./weather", () => {
  return {
    showWeather: jest.fn(),
  };
});
jest.mock("./cityCoordinates", () => {
  return {
    cityCoordinates: jest.fn().mockResolvedValue([12.412, 41.412]),
  };
});
describe("addButton", () => {
  it("add button to list", () => {
    addButton("London");
    expect(
      document.querySelector(".list").querySelector("button"),
    ).toBeTruthy();
  });
  it("shows weather on click", () => {
    addButton("Rome");
    const button = document.querySelector(".list button");
    button.click();
    expect(showWeather).toHaveBeenCalledWith("Rome");
  });
});
describe("addButtonReload", () => {
  it("add button to list", () => {
    addButtonReload("London");
    expect(
      document.querySelector(".list").querySelector("button"),
    ).toBeTruthy();
  });
  it("shows weather on click", () => {
    addButtonReload("Rome");
    const button = document.querySelector(".list button");
    button.click();
    expect(showWeather).toHaveBeenCalledWith("Rome");
  });
});
