export default class SigninFormController {
  constructor($auth, $state) {
    this.$auth  = $auth;
    this.$state = $state;
    this.user   = {};
  }

  onSubmit(form) {
    if (form.$invalid) return;

    this.$auth.submitLogin(this.user).then(() => {
      this.$state.go('root.projects', {}, { reload: true });
    }).catch(() => {
      this.reset();
    });
  }

  reset() {
    this.user.password = '';
  }
}

SigninFormController.$inject = ['$auth', '$state'];
