import "./styles.css";
import { readAndClearInput } from "./readAndClearInput";
import { showWeather } from "./weather";
import { addButton, addButtonReload } from "./button";
import { cityCoordinates } from "./cityCoordinates";

export async function start(div) {
  const storageKeyLastCity = "lastCity";
  const storageKeyAllCity = "allCity";

  document.body.append(div);

  const sectionWeather = document.createElement("section");
  sectionWeather.className = "weaher_container";

  const input = document.createElement("input");
  input.placeholder = "Enter city";
  sectionWeather.append(input);

  const buttonInput = document.createElement("button");
  buttonInput.className = "input_button";
  buttonInput.innerText = "Show Weather";
  sectionWeather.append(buttonInput);

  const list = document.createElement("ul");
  list.className = "list";
  sectionWeather.append(list);

  const buttonClear = document.createElement("button");
  buttonClear.className = "clearStorage";
  buttonClear.innerText = "Clear";
  sectionWeather.append(buttonClear);

  div.append(sectionWeather);

  const sectionShowWeather = document.createElement("section");
  sectionShowWeather.className = "show_weather";

  div.append(sectionShowWeather);

  const img = document.createElement("img");
  img.className = "map";

  div.append(img);

  let staticMap;

  div.querySelector(".clearStorage").addEventListener("click", () => {
    localStorage.clear();
    div.querySelector(".list").remove();
    location.reload();
  });

  const lastCity =
    localStorage.getItem(storageKeyLastCity) === null
      ? false
      : JSON.parse(localStorage.getItem(storageKeyLastCity));
  const allCity =
    localStorage.getItem(storageKeyAllCity) === null
      ? []
      : JSON.parse(localStorage.getItem(storageKeyAllCity));

  if (lastCity) {
    showWeather(lastCity);
    allCity.forEach((element) => {
      addButtonReload(element);
    });
    staticMap = `https://static-maps.yandex.ru/v1?ll=${(
      await cityCoordinates(await lastCity)
    ).join(",")}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
    div.querySelector(".map").src = staticMap;
  } else {
    const userCity = fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((ip) => ip.json())
      .then((userCity) => userCity.city);
    showWeather(await userCity);
    addButton(await userCity);
    allCity.unshift(await userCity);
    localStorage.setItem(storageKeyAllCity, JSON.stringify(allCity));
    localStorage.setItem(storageKeyLastCity, JSON.stringify(await userCity));
    staticMap = `https://static-maps.yandex.ru/v1?ll=${(
      await cityCoordinates(await userCity)
    ).join(",")}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
    div.querySelector(".map").src = staticMap;
  }

  div.querySelector(".input_button").addEventListener("click", async () => {
    const value = readAndClearInput();
    showWeather(value);
    localStorage.setItem(storageKeyLastCity, JSON.stringify(value));
    if (!allCity.includes(value)) {
      addButton(value);
      if (allCity.length === 10) {
        allCity.pop();
        div.querySelector(".list").childNodes[allCity.length + 1].remove();
        allCity.unshift(value);
      } else {
        allCity.unshift(value);
      }
      localStorage.setItem(storageKeyAllCity, JSON.stringify(allCity));
    }
    staticMap = `https://static-maps.yandex.ru/v1?ll=${(
      await cityCoordinates(value)
    ).join(",")}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
    div.querySelector(".map").src = staticMap;
  });
}

start(document.createElement("div"));
