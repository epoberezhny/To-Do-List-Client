export default class AddProjectController {
  constructor() {
    this.active        = false;
    this.projectParams = {};
  }

  onSubmit(form) {
    if (form.$invalid) return;

    this.createProject({ params: this.projectParams }).then(() => {
      this.clear();
    });
  }

  clear() {
    this.projectParams.name = '';
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
    this.clear();
  }
}
