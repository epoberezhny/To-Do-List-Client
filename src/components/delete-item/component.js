import template from './template.html';
import controller from './controller';

const DeleteItemComponent = {
  template,
  controller,
  require: {
    modal: '^^tdlModal'
  }
};

export default DeleteItemComponent;
