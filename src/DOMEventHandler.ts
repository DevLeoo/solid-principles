import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler {
  addEventListenerToClass(__class: string, event: string, fn: any) {
    const elements: any = document.querySelectorAll(__class);
    for (const element of elements) {
      element.addEventListener(event, fn);
    }
  }
}
