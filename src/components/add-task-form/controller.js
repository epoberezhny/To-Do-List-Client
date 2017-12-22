export default class AddTaskController {
  constructor() {
    this.active     = false;
    this.taskParams = {};
  }

  onSubmit(form) {
    if (form.$invalid) return;

    this.createTask({ params: this.taskParams }).then(() => {
      this.clear();
    });
  }

  clear() {
    this.taskParams.name = '';
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
    this.clear();
  }
}
