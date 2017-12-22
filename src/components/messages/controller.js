export default class MessagesController {
  constructor(Messages) {
    this.messageParams = Messages.get();
  }
}

MessagesController.$inject = ['Messages'];
