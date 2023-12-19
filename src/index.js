import "./styles.css";
import { readInput } from "./addCityToList";
import { showWeather } from "./weather";
import { addButton } from "./button";

const storageKeyLastCity = "lastCity";
const storageKeyButtonList = "buttonList";
document.querySelector(".clearStorage").addEventListener("click", () => {
  localStorage.clear();
  document.querySelector(".list").remove();
  location.reload();
});
const lastCity =
  localStorage.getItem(storageKeyLastCity) === null
    ? false
    : JSON.parse(localStorage.getItem(storageKeyLastCity));
const buttonList =
  localStorage.getItem(storageKeyButtonList) === null
    ? []
    : JSON.parse(localStorage.getItem(storageKeyButtonList));

if (lastCity) {
  showWeather(lastCity);
  buttonList.forEach((element) => {
    addButton(element);
  });
} else {
  const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((ip) => ip.json())
    .then((userCity) => userCity.city);
  showWeather(await userCity);
  addButton(await userCity);
  localStorage.setItem(storageKeyLastCity, JSON.stringify(await userCity));
  buttonList.push(await userCity);
  localStorage.setItem(storageKeyButtonList, JSON.stringify(buttonList));
}

document.querySelector(".input_button").addEventListener("click", async () => {
  const value = readInput();
  showWeather(value);
  localStorage.setItem(storageKeyLastCity, JSON.stringify(value));
  addButton(value);
  buttonList.push(value);
  localStorage.setItem(storageKeyButtonList, JSON.stringify(buttonList));
});
