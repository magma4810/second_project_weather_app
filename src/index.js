import "./styles.css";
import { readInput } from "./addCityToList";
import { showWeather } from "./weather";
import { addButton } from "./button";

document.querySelector(".input_button").addEventListener("click", async () => {
  const list = readInput();
  showWeather(list[0]);
  addButton(list[1]);
});
