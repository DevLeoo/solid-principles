import AbstractShareLinkButton from "./AbstractShareLinkButton";
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractShareLinkButton {
  constructor(eventHandler: EventHandler, __class: string, url: string) {
    super(eventHandler, __class, url);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
}
