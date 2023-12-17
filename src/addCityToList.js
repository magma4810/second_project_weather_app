const list = [];

export function readInput() {
  const input = document.querySelector("input");
  const value = input.value;
  input.value = "";
  list.push(value);
  addValueToList();
}

function addValueToList() {
  document.querySelector(".list").innerHTML = `${list
    .map((el) => `<li>${el}</li>`)
    .join("")}`;
}
