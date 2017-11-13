export default function ProjectFactory(Resource) {
  return Resource('/projects/:id');
}

ProjectFactory.$inject = ['Resource'];
