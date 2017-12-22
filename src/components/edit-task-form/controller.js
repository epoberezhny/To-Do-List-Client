export default class EditTaskFormController {
  $onInit() {
    this.taskParams = {
      id: this.task.id,
      name: this.task.name
    };
  }
  
  onSubmit(form) {
    if (form.$invalid) return;

    this.updateTask({ params: this.taskParams }).then(() => {
      this.taskContainer.toggleEditMode();
    });
  }
}
