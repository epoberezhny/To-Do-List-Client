import template from '../templates/datetimepicker.html';
import moment   from 'moment';

export default function run($rootScope, $state, $transitions, $templateCache) {

  // configure datetimepicker
  $templateCache.put('templates/datetimepicker.html', template);
  moment.locale('en-gb');

  // make state global for pretty title
  $rootScope.$state = $state;

  // authentication
  const authenticateCriteria = {
    to: (state) => state.auth === 'authenticate'
  };

  const skipCriteria = {
    to: (state) => state.auth === 'skip'
  };

  $transitions.onBefore(skipCriteria, function($transition$) {
    return $transition$.injector().getAsync('user')
      .then(user => {
        if (user) return $state.target('root.projects');
      });
  });

  $transitions.onBefore(authenticateCriteria, function($transition$) {
    return $transition$.injector().getAsync('user')
      .then(user => {
        if (!user) return $state.target('root.signin');
      });
  });

  // when initial state is modal
  $transitions.onBefore({ to: 'modal.*', from: '' }, function() { 
    return $state.target('root.projects');
  });

  $transitions.onSuccess({ to: 'root.projects' }, function ($transition$) {
    var trans = $transition$.redirectedFrom();

    if (trans && trans.$to().includes['modal']) {
      $state.go(trans.to(), trans.params());
    }
  });

  // $transitions.onBefore({ to: 'modal.*', from: '' }, function($transition$) {
  //   $state.go('root.projects')
  //     .then(() => $state.go($transition$.to(), $transition$.params()));

  //   return false;
  // });
}

run.$inject = ['$rootScope', '$state', '$transitions', '$templateCache'];
