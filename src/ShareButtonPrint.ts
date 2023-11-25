import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonPrint extends AbstractShareButton {
  constructor(eventHandler: EventHandler, __class: string) {
    super(eventHandler, __class);
  }

  createAction(): any {
    return () => window.print();
  }
}
