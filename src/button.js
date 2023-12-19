import { showWeather } from "./weather";

export const addButton = (value) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.innerHTML = value;
  button.addEventListener("click", async () => {
    await showWeather(button.innerHTML);
  });
  li.append(button);
  document.querySelector(".list").append(li);
};
