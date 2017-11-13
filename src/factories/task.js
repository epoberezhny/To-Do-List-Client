export default function TaskFactory(Resource) {
  return Resource('/projects/:project_id/tasks/:id');
}

TaskFactory.$inject = ['Resource'];
