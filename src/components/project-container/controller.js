export default class ProjectContainerController {
  constructor() {
    this.editMode = false;
  }

  toggleEditMode(event) {
    if (event) event.stopPropagation();
    this.editMode = !this.editMode;
  }
}
