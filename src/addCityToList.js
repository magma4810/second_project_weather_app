const list = [];

export function readInput() {
  const input = document.querySelector("input");
  const value = input.value;
  input.value = "";
  list.push(value);
  return [value, list];
}
