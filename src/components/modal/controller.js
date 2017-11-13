export default class ModalController {
  constructor($state) {
    this.$state = $state;
  }

  close() {
    this.$state.go('root.projects');
  }
}

ModalController.$inject = ['$state'];
