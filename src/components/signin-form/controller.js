export default class SigninFormController {
  constructor($auth, $state, Messages) {
    this.$auth    = $auth;
    this.$state   = $state;
    this.Messages = Messages;
    this.user     = {};
  }

  onSubmit(form) {
    if (form.$invalid) return;

    this.$auth.submitLogin(this.user).then(() => {
      this.$state.go('root.projects', {}, { reload: true });
    }).catch(response => {
      this.reset();

      var [message] = response.errors;
      this.Messages.set({ message, type: 'danger' });
    });
  }

  reset() {
    this.user.password = '';
  }
}

SigninFormController.$inject = ['$auth', '$state', 'Messages'];
