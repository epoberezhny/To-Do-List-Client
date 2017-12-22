import template from './template.html';
import controller from './controller';

const AddTaskFormComponent = {
  template,
  controller,
  bindings: {
    createTask: '&'
  }
}

export default AddTaskFormComponent;
