export default class DeadlinePopoverController {
  constructor() {
    this.datesOpened = false;
    this.timesOpened = false;
  }

  $onInit() {
    this.taskParams = { id: this.task.id };

    if (this.task.deadline) {
      this.taskParams.deadline = new Date(this.task.deadline);
    } else {
      this.taskParams.deadline = new Date();
    }
  }

  saveDeadline() {
    this.updateTask({ params: this.taskParams }).then(() => {
      this.onClose();
    });
  }

  toggleDates() {
    this.datesOpened = !this.datesOpened;
  }

  toggleTimes() {
    this.timesOpened = !this.timesOpened;
  }
}
