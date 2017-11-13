import { extend } from 'angular';

export default class ProjectsContainerController {
  constructor(Project) {
    this.Project  = Project;
  }

  $onInit() {
    this.Project.index().then(response => {
      this.projects = response.data;
    }).catch();
  }

  createProject(params) {
    return this.Project.create(params).then(response => {
      this.projects.push(response.data);
    }).catch();
  }

  updateProject(index, params) {
    return this.Project.update(params).then(response => {
      var project = this.projects[index];
      extend(project, response.data);
    }).catch();
  }

  deleteProject(index, params) {
    return this.Project.delete(params).then(() => {
      this.projects.splice(index, 1);
    }).catch();
  }
}

ProjectsContainerController.$inject = ['Project'];
