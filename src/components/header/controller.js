export default class HeaderController {
  constructor($auth, $state) {
    this.$auth  = $auth;
    this.$state = $state;
  }

  logOut() {
    this.$auth.signOut()
      .then(() => {
        this.$state.go('root.signin', {}, { reload: true });
      })
      .catch(() => alert('internal error'));
  }
}

HeaderController.$inject = ['$auth', '$state'];
