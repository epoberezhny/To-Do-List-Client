import template from './template.html';
import controller from './controller';

const AddCommentFormComponent = {
  template,
  controller,
  bindings: {
    onClose: '&',
    createComment: '&'
  }
}

export default AddCommentFormComponent;
