export default class SignupController {
  constructor($auth, $state) {
    this.$auth  = $auth;
    this.$state = $state;
    this.user   = {};
  }

  onSubmit(form) {
    if (form.$invalid) return;

    this.$auth.submitRegistration(this.user).then(() => {
      this.$state.go('root.projects', {}, { reload: true });
    }).catch(() => {
      this.reset();
    });
  }

  reset() {
    this.user.password = this.user.password_confirmation = '';
  }
}

SignupController.$inject = ['$auth', '$state'];
