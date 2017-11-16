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
      var defaultDate = new Date();
      defaultDate.setHours(12, 0, 0, 0);
      this.taskParams.deadline = defaultDate;
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
