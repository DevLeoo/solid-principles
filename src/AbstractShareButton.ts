import DOMEventHandler from "./DOMEventHandler";
import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  domEventHandler: DOMEventHandler;
  __class: string;

  constructor(eventHandler: EventHandler, __class: string) {
    this.__class = __class;
    this.domEventHandler = eventHandler;
  }

  bind() {
    const action = this.createAction();

    this.domEventHandler.addEventListenerToClass(this.__class, "click", action);
  }

  abstract createAction(): any;
}
