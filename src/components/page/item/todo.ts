import { BaseComponent } from "../../component.js";

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(todo: string) {
    super(`
      <section class="todo">
        <input type="checkbox" class="todo-checkbox">
        <label for="todo-checkbox" class="todo-label"></label>
      </section>
    `);

    const todoElement = this.element.querySelector(
      ".todo-checkbox"
    )! as HTMLInputElement;
    todoElement.insertAdjacentText("afterend", todo);
  }
}
