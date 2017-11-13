export default class DeleteItemController {
  constructor($stateParams) {
    this.params = $stateParams;
  }

  onDelete() {
    this.params.deleteItem({ params: this.params.item }).then(() => {
      this.modal.close();
    });
  }
}

DeleteItemController.$inject = ['$stateParams'];
