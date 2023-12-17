import "./styles.css";
import { readInput } from "./addCityToList";

document.querySelector(".input_button").addEventListener("click", () => {
  readInput();
});
