import { BaseComponent } from "../../component.js";

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`
      <section class='video'>
        <div class="video-player">
          <iframe src="" frameborder="0" class="video-iframe"></iframe>
        </div>
        <h3 class="video-title"></h3>
      </section>
    `);

    const iframe = this.element.querySelector(
      ".video-iframe"
    )! as HTMLIFrameElement;
    iframe.src = this.toEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      ".video-title"
    )! as HTMLHeadingElement;
    titleElement.textContent = title;
  }

  private toEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-_]{11}))|(?:youtu.be\/([a-zA-Z0-9-_]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// <iframe
//   width="788"
//   height="443"
//   src="https://www.youtube.com/embed/2sXW_NbmsGU"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;
