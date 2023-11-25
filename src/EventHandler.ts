export default interface EventHandler {
  addEventListenerToClass(__class: string, event: string, fn: any): any;
}
