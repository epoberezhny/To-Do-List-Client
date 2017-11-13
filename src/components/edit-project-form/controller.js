export default class EditProjectFormController {
  $onInit() {
    this.projectParams = {
      id: this.project.id,
      name: this.project.name
    };
  }
  
  onSubmit(form) {
    if (form.$invalid) return;

    this.updateProject({ params: this.projectParams }).then(() => {
      this.projectContainer.toggleEditMode();
    });
  }
}
