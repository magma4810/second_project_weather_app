import "./styles.css";
import { readInput } from "./addCityToList";
import { showWeather } from "./weather";
import { addButton } from "./button";
import { cityCoordinates } from "./cityCoordinates";

const storageKeyLastCity = "lastCity";
const storageKeyButtonList = "buttonList";
let staticMap;
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
  staticMap = `https://static-maps.yandex.ru/v1?ll=${(
    await cityCoordinates(await lastCity)
  ).join(",")}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
  document.querySelector(".map").src = staticMap;
} else {
  const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
    .then((ip) => ip.json())
    .then((userCity) => userCity.city);
  showWeather(await userCity);
  addButton(await userCity);
  localStorage.setItem(storageKeyLastCity, JSON.stringify(await userCity));
  buttonList.push(await userCity);
  localStorage.setItem(storageKeyButtonList, JSON.stringify(buttonList));
  staticMap = `https://static-maps.yandex.ru/v1?ll=${(
    await cityCoordinates(await userCity)
  ).join(",")}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
  document.querySelector(".map").src = staticMap;
}

document.querySelector(".input_button").addEventListener("click", async () => {
  const value = readInput();
  showWeather(value);
  localStorage.setItem(storageKeyLastCity, JSON.stringify(value));
  addButton(value);
  buttonList.push(value);
  localStorage.setItem(storageKeyButtonList, JSON.stringify(buttonList));
  staticMap = `https://static-maps.yandex.ru/v1?ll=${(
    await cityCoordinates(JSON.parse(localStorage.getItem(lastCity)))
  ).join(",")}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
  document.querySelector(".map").src = staticMap;
});
