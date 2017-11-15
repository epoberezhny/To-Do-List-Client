import { isFunction } from 'angular';

export default class CommentsContainerController {
  constructor(Comment, $stateParams) {
    this.Comment = Comment;
    this.params  = $stateParams;
  }

  $onInit(params = {}) {
    if (this.params.comments) {
      this.comments = this.params.comments;
    } else {
      params['project_id'] = this.params.projectId;
      params['task_id']    = this.params.taskId;

      this.Comment.index(params).then(response => {
        this.comments = response.data;
        
        if ( isFunction(this.params.setComments) ) {
          this.params.setComments(this.comments);
        }
      });
    }
  }

  createComment(params) {
    params['project_id'] = this.params.projectId;
    params['task_id']    = this.params.taskId;

    return this.Comment.createWithFile(params).then(response => {
      this.comments.push(response.data);
      if ( isFunction(this.params.setComments) ) {
        this.params.setComments(this.comments);
      }
    });
  }

  deleteComment(index, params) {
    params['project_id'] = this.params.projectId;
    
    return this.Comment.delete(params).then(() => {
      this.comments.splice(index, 1);
      if ( isFunction(this.params.setComments) ) {
        this.params.setComments(this.comments);
      }
    });
  }
}

CommentsContainerController.$inject = ['Comment', '$stateParams'];
