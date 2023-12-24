import "whatwg-fetch";
import { start } from "./index.js";

beforeEach(() => {
  start(document.createElement("div"));
});

describe("add structure in DOM", () => {
  it("add weaher container", () => {
    expect(document.querySelector(".weaher_container").className).toBe(
      "weaher_container",
    );
  });
  it("add input", () => {
    expect(document.querySelector("input").placeholder).toBe("Enter city");
  });
  it("add input button", () => {
    const button = document.querySelector(".input_button");
    expect(button.innerText).toBe("Show Weather");
    expect(button.className).toBe("input_button");
  });
  it("add list", () => {
    expect(document.querySelector(".list").className).toBe("list");
  });
  it("add button Clear", () => {
    const clearStorage = document.querySelector(".clearStorage");
    expect(clearStorage.className).toBe("clearStorage");
    expect(clearStorage.innerText).toBe("Clear");
  });
  it("add section Show Weather", () => {
    expect(document.querySelector(".show_weather").className).toBe(
      "show_weather",
    );
  });
  it("add map", () => {
    expect(document.querySelector(".map").className).toBe("map");
  });
});

describe("test main programm", () => {
  it("test clear button", () => {
    const clearButton = document.querySelector(".clearStorage");
    clearButton.click();
    expect(localStorage.getItem("allCity")).toBe(null);
    expect(document.querySelector(".list").innerText).toBe(undefined);
  });
  it("lastCity and allCity", () => {
    const storageKeyLastCity = "lastCity";
    const storageKeyAllCity = "allCity";
    const lastCity =
      localStorage.getItem(storageKeyLastCity) === null
        ? false
        : JSON.parse(localStorage.getItem(storageKeyLastCity));
    const allCity =
      localStorage.getItem(storageKeyAllCity) === null
        ? []
        : JSON.parse(localStorage.getItem(storageKeyAllCity));
    expect(lastCity).toBe(false);
    expect(allCity).toStrictEqual([]);
  });
});
