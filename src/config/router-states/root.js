const rootState = {
  url: '/',
  views: {
    root: {
      component: 'tdlApp',
    }
  },
  resolve: {
    user: ['$auth', ($auth) => $auth.validateUser().catch(() => null)]
  },
  abstract: true,
  sticky: true
};

export default rootState;
