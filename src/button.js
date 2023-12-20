import { showWeather } from "./weather";
import { cityCoordinates } from "./cityCoordinates";
export const addButton = (value) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = value;
  button.addEventListener("click", async () => {
    await showWeather(button.innerHTML);
    let staticMap = `https://static-maps.yandex.ru/v1?ll=${(
      await cityCoordinates(button.innerHTML)
    ).join(",")}&z=12&apikey=e0b3de27-83db-41e7-b150-72e7d09d00fc`;
    document.querySelector(".map").src = staticMap;
  });
  li.append(button);
  document.querySelector(".list").append(li);
};
