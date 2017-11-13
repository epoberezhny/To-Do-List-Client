export default class TaskContainerController {
  constructor() {
    this.editMode = false;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }
}
