import { StickyStatesPlugin } from '@uirouter/sticky-states';

import rootState       from './router-states/root';
import signinState     from './router-states/root.signin';
import signupState     from './router-states/root.signup';
import projectsState   from './router-states/root.projects';
import modalState      from './router-states/modal';
import commentsState   from './router-states/modal.comments';
import deleteItemState from './router-states/modal.delete';

export default function routerConfig($uiRouterProvider, $locationProvider, $urlRouterProvider, $stateProvider) {
  $uiRouterProvider.plugin(StickyStatesPlugin);

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/projects');

  $stateProvider
    .state('root',           rootState)
    .state('root.signin',    signinState)
    .state('root.signup',    signupState)
    .state('root.projects',  projectsState)
    .state('modal',          modalState)
    .state('modal.comments', commentsState)
    .state('modal.delete',   deleteItemState);
}

routerConfig.$inject = [
  '$uiRouterProvider',
  '$locationProvider',
  '$urlRouterProvider',
  '$stateProvider'
];
