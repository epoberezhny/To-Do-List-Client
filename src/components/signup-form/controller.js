export default class SignupController {
  constructor($auth, $state, Messages) {
    this.$auth    = $auth;
    this.$state   = $state;
    this.Messages = Messages;
    this.user     = {};
  }

  onSubmit(form) {
    if (form.$invalid) return;

    this.$auth.submitRegistration(this.user).then(() => {
      this.$state.go('root.projects', {}, { reload: true });
    }).catch(response => {
      this.reset();

      var [message] = response.data.errors['full_messages'];
      this.Messages.set({ message, type: 'danger' });
    });
  }

  reset() {
    this.user.password = this.user.password_confirmation = '';
  }
}

SignupController.$inject = ['$auth', '$state', 'Messages'];
