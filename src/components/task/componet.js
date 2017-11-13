import template from './template.html';
import controller from './controller';

const TaskComponent = {
  template,
  controller,
  bindings:{
    task: '<',
    deleteTask: '&',
    updateTask: '&'
  },
  require: {
    taskContainer: '^^tdlTaskContainer'
  }
}

export default TaskComponent;
