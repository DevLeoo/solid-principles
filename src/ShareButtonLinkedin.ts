import AbstractShareLinkButton from "./AbstractShareLinkButton";
import EventHandler from "./EventHandler";

export default class ShareButtonLinkedin extends AbstractShareLinkButton {
  constructor(eventHandler: EventHandler, __class: string, url: string) {
    super(eventHandler, __class, url);
  }

  createLink(): string {
    return `https://www.linkedin.com/shareArticle?url=${this.url}`;
  }
}
