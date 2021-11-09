import { BaseComponent } from "../../component.js";
import { TodoData } from "../dialog.js";

export class TodoSectionInput
  extends BaseComponent<HTMLElement>
  implements TodoData
{
  constructor() {
    super(`
      <div>
        <div class="form-container">
          <label for="body">To Do</label>
          <textarea type="text" row="3" id="body"></textarea>
        </div>
      </div>
    `);
  }

  get body(): string {
    const element = this.element.querySelector("#body")! as HTMLInputElement;
    return element.value;
  }
}
