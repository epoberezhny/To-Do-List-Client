import template from './template.html';

const CommentComponent = {
  template,
  bindings:{
    comment: '<',
    deleteComment: '&'
  }
}

export default CommentComponent;
