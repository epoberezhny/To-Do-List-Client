import template from './template.html';
import controller from './controller';

const DeadlinePopoverComponent = {
  template,
  controller,
  bindings: {
    task: '<',
    updateTask: '&',
    onClose: '&'
  }
};

export default DeadlinePopoverComponent;
