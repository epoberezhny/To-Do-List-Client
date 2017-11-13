import template from './template.html';
import controller from './controller';

const TasksContainerComponent = {
  template,
  controller,
  bindings: {
    projectId: '<',
    tasks: '='
  }
}

export default TasksContainerComponent;
