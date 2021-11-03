import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";

class App {
  private readonly page: PageComponent;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "image title",
      "https://picsum.photos/600/300"
    );
    image.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("Note title", "Note body");
    note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("Todo Title", "Todo Item");
    todo.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "Video title",
      "https://www.youtube.com/embed/2sXW_NbmsGU"
    );
    video.attachTo(appRoot, "beforeend");
  }
}

new App(document.querySelector(".document")! as HTMLElement);
