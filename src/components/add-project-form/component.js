import template from './template.html';
import controller from './controller';

const AddProjectFormComponent = {
  template,
  controller,
  bindings: {
    createProject: '&'
  }
}

export default AddProjectFormComponent;
