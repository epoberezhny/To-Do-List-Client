import template from './template.html';
import controller from './controller';

const EditProjectFormComponent = {
  template,
  controller,
  bindings: {
    project: '<',
    updateProject: '&'
  },
  require: {
    projectContainer: '^^tdlProjectContainer'
  }
}

export default EditProjectFormComponent;
