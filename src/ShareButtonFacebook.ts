import AbstractShareLinkButton from "./AbstractShareLinkButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractShareLinkButton {
  constructor(eventHandler: EventHandler, __class: string, url: string) {
    super(eventHandler, __class, url);
  }

  createLink(): string {
    return `https://www.facebook.com/sharer.php?u=${this.url}`;
  }
}
