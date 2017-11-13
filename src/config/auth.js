export default function authConfig($authProvider) {
  $authProvider.configure({
    apiUrl:             __API__,
    validateOnPageLoad: false,
  });
}

authConfig.$inject = ['$authProvider'];
