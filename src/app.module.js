// styles
import './assets/scss/index.scss';

// angular modules
import { module }  from 'angular';
import ngMessages  from 'angular-messages';
import ngAnimate   from 'angular-animate';
import ngUIRouter  from '@uirouter/angularjs';
import ngTokenAuth from 'ng-token-auth';
import ngSortable  from 'angular-legacy-sortablejs-maintained';

import 'angular-bootstrap-datetimepicker/src/js/datetimepicker';
import 'angular-cookie';

// config
import runConfig      from './config/run';
import authConfig     from './config/auth';
import routerConfig   from './config/router';
import resourceConfig from './config/resource';

// components
import tdlAppComponent               from './components/app/component';
import tdlHeaderComponent            from './components/header/component';
import tdlSigninFormComponent        from './components/signin-form/component';
import tdlSignupFormComponent        from './components/signup-form/component';
import tdlProjectsContainerComponent from './components/projects-container/componet';
import tdlProjectContainerComponent  from './components/project-container/component';
import tdlProjectComponent           from './components/project/componet';
import tdlAddProjectFormComponent    from './components/add-project-form/component';
import tdlEditProjectFormComponent   from './components/edit-project-form/component';
import tdlTasksContainerComponent    from './components/tasks-container/componet';
import tdlTaskContainerComponent     from './components/task-container/component';
import tdlTaskComponent              from './components/task/componet';
import tdlAddTaskFormComponent       from './components/add-task-form/component';
import tdlEditTaskFormComponent      from './components/edit-task-form/component';
import tdlDeadlinePopoverComponent   from './components/deadline-popover/component';
import tdlModalComponent             from './components/modal/component';
import tdlCommentsContainerComponent from './components/comments-container/component';
import tdlCommentComponent           from './components/comment/component';
import tdlAddCommentFormComponent    from './components/add-comment-form/component';
import tdlDelteItemComponent         from './components/delete-item/component';
import tdlFileInputComponent         from './components/file-input/component';
import tdlMessagesComponent          from './components/messages/component';

// providers
import resourceProvider from './providers/resource/provider';

// factories
import projectFactory  from './factories/project';
import taskFactory     from './factories/task';
import commentFactory  from './factories/comment';
import messagesFactory from './factories/messages';

// validators
import maxFileSizeValidator from './validators/max-file-size';
import fileTypeValidator    from './validators/file-type';

module('ToDoList', [ngMessages, ngAnimate, ngUIRouter, ngTokenAuth, ngSortable, 'ui.bootstrap.datetimepicker'])
  // config
  .run(runConfig)
  .config(authConfig)
  .config(routerConfig)
  .config(resourceConfig)

  // components
  .component('tdlApp',               tdlAppComponent)
  .component('tdlHeader',            tdlHeaderComponent)
  .component('tdlSigninForm',        tdlSigninFormComponent)
  .component('tdlSignupForm',        tdlSignupFormComponent)
  .component('tdlProjectsContainer', tdlProjectsContainerComponent)
  .component('tdlProjectContainer',  tdlProjectContainerComponent)
  .component('tdlProject',           tdlProjectComponent)
  .component('tdlAddProjectForm',    tdlAddProjectFormComponent)
  .component('tdlEditProjectForm',   tdlEditProjectFormComponent)
  .component('tdlTasksContainer',    tdlTasksContainerComponent)
  .component('tdlTaskContainer',     tdlTaskContainerComponent)
  .component('tdlTask',              tdlTaskComponent)
  .component('tdlAddTaskForm',       tdlAddTaskFormComponent)
  .component('tdlEditTaskForm',      tdlEditTaskFormComponent)
  .component('tdlDeadlinePopover',   tdlDeadlinePopoverComponent)
  .component('tdlModal',             tdlModalComponent)
  .component('tdlCommentsContainer', tdlCommentsContainerComponent)
  .component('tdlComment',           tdlCommentComponent)
  .component('tdlAddCommentForm',    tdlAddCommentFormComponent)
  .component('tdlDeleteItem',        tdlDelteItemComponent)
  .component('tdlFileInput',         tdlFileInputComponent)
  .component('tdlMessages',          tdlMessagesComponent)

  // providers
  .provider('Resource', resourceProvider)

  // factories
  .factory('Project', projectFactory)
  .factory('Task',    taskFactory)
  .factory('Comment', commentFactory)
  .factory('Messages', messagesFactory)
  
  // validators
  .directive('maxFileSize', maxFileSizeValidator)
  .directive('fileType',    fileTypeValidator);
