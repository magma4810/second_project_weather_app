import "./styles.css";
import { readInput } from "./addCityToList";
import { showWeather } from "./weather";
import { addButton } from "./button";

const storageKey = "weather";
const lastCity =
  localStorage.getItem(storageKey) === false
    ? []
    : JSON.parse(localStorage.getItem(storageKey));
if (lastCity) {
  showWeather(lastCity);
} else {
  const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((ip) => ip.json())
    .then((userCity) => userCity.city);
  showWeather(await userCity);
  addButton(await userCity);
}

document.querySelector(".input_button").addEventListener("click", async () => {
  const value = readInput();
  showWeather(value);
  addButton(value);
  localStorage.setItem(storageKey, JSON.stringify(value));
});
