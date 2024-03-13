import { getWeather, showWeather } from "./weather.js";
import { readAndClearInput } from "./readAndClearInput.js";

function mockFetch(result) {
  window.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(result),
    });
}

describe("test weather.js", () => {
  window.alert = jest.fn();
  window.alert.mockClear();
  let section = document.createElement("section");
  section.className = "show_weather";
  document.body.append(section);
  mockFetch({
    name: "Rome",
    main: { temp: 1.98 },
    weather: [{ icon: "04d" }],
    cod: 200,
  });
  let weather;
  it("get Weather", async () => {
    weather = await getWeather("Rome");
    expect(weather.name).toEqual("Rome");
    expect(weather.main.temp).toEqual(1.98);
    expect(weather.weather[0].icon).toEqual("04d");
  });
  it("show Weather", async () => {
    await showWeather("Rome");
    expect(section.innerHTML).toBe(`Погода в ${weather.name} <br>
  Temperature: ${weather.main.temp}˚
  <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"> `);
  });
});
describe("test for readAndClearInput.js", () => {
  let input = document.createElement("input");
  document.body.append(input);
  input.value = "Hello";
  let value = readAndClearInput();
  it("read And Clear Input", () => {
    expect(value).toBe("Hello");
    expect(input.value).toBe("");
  });
});
