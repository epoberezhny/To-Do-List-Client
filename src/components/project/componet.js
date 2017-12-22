import template from './template.html';
import controller from './controller';

const ProjectComponent = {
  template,
  controller,
  bindings: {
    project: '<',
    deleteProject: '&'
  },
  require: {
    projectContainer: '^^tdlProjectContainer'
  }
}

export default ProjectComponent;
