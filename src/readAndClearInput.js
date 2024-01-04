export function readAndClearInput() {
  const input = document.querySelector("input");
  const value = input.value;
  input.value = "";
  return value;
}
