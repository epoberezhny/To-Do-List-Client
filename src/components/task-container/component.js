import template from './template.html';
import controller from './controller';

const TaskContainerComponent = {
  template,
  controller,
  transclude: {
    editForm: 'tdlEditTaskForm',
    task:     'tdlTask'
  }
}

export default TaskContainerComponent;
