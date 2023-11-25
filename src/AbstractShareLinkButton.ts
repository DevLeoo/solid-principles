import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default abstract class AbstractShareLinkButton extends AbstractShareButton {
  url: string;

  constructor(eventHandler: EventHandler, __class: string, url: string) {
    super(eventHandler, __class);
    this.url = url;
  }

  abstract createLink(): string;

  createAction() {
    const link = this.createLink();
    return () => window.open(link);
  }
}
