import template from './template.html';
import controller from './controller';

const CommentComponent = {
  template,
  controller,
  bindings:{
    comment: '<',
    deleteComment: '&'
  }
}

export default CommentComponent;
