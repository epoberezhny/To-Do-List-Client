import template from './template.html';
import controller from './controller';

const EditTaskFormComponent = {
  template,
  controller,
  bindings: {
    task: '<',
    updateTask: '&'
  },
  require: {
    taskContainer: '^^tdlTaskContainer'
  }
}

export default EditTaskFormComponent;
