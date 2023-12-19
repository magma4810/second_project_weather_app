import { showWeather } from "./weather";
import { addButton } from "./button";
const list = [];

export function readInput() {
  const input = document.querySelector("input");
  const value = input.value;
  input.value = "";
  list.push(value);
  showWeather(value);
  addButton(list);
  //   return value;
}
