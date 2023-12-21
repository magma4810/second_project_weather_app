import { getWeather, showWeather } from "./weather";

function mockFetch(result) {
  window.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(result),
    });
}
beforeEach(async () => {
  let section = document.createElement("section");
  section.className = "show_weather";
  document.body.append(section);
});
let weather;
describe("test weather.js", () => {
  it("get Weather", async () => {
    mockFetch({
      name: "Rome",
      main: { temp: 1.98 },
      weather: [{ icon: "04d" }],
    });
    weather = await getWeather();
    expect(weather.name).toEqual("Rome");
    expect(weather.main.temp).toEqual(1.98);
    expect(weather.weather[0].icon).toEqual("04d");
  });
  it("show Weather", async () => {
    await showWeather("Rome");
    expect(document.querySelector(".show_weather").innerHTML)
      .toBe(`Погода в ${weather.name} <br>
  Temperature: ${weather.main.temp}˚
  <img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"> `);
  });
});
