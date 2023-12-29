import { addButton } from "./button";

beforeEach(() => {
  const list = document.createElement("div");
  list.className = "list";
  document.append(list);
});
describe("test button", () => {
  it("addButton", () => {
    addButton("Rome");
  });
});
