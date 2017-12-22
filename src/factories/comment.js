export default function CommentFactory(Resource) {
  return Resource('/projects/:project_id/tasks/:task_id/comments/:id');
}

CommentFactory.$inject = ['Resource'];
