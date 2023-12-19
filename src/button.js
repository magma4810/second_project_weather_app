import { showWeather } from "./weather";

export const addButton = (list) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = list[list.length - 1];
  button.addEventListener("click", async () => {
    await showWeather(button.innerHTML);
  });
  li.append(button);
  document.querySelector(".list").append(li);
};
