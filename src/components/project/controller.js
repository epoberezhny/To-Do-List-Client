export default class ProjectController {
  constructor($state) {
    this.$state = $state;
    this.opened = false;
  }

  toggleOpened() {
    this.opened = !this.opened;
  }

  openDeleteModal(event) {
    event.stopPropagation();
    
    var params = {
      item: this.project,
      itemType: 'project',
      deleteItem: this.deleteProject
    };

    this.$state.go('modal.delete', params);
  }
}

ProjectController.$inject = ['$state'];
