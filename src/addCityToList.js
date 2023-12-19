export function readInput() {
  const input = document.querySelector("input");
  const value = input.value;
  input.value = "";
  return value;
}
