import template from './template.html';
import controller from './controller';

const CommentsContainerComponent = {
  template,
  controller,
  require: {
    modal: '^^tdlModal'
  }
};

export default CommentsContainerComponent;
