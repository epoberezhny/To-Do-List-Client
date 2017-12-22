import template from './template.html';
import controller from './controller';

const ProjectContainerComponent = {
  template,
  controller,
  transclude: {
    editForm: 'tdlEditProjectForm',
    project:  'tdlProject'
  }
}

export default ProjectContainerComponent;
