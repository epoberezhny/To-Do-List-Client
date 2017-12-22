import { extend } from 'angular';

export default class ProjectsContainerController {
  constructor(Project, Messages) {
    this.Project  = Project;
    this.Messages = Messages;
  }

  $onInit() {
    this.Project.index().then(response => {
      this.projects = response.data;
    });
  }

  createProject(params) {
    return this.Project.create(params).then(response => {
      this.projects.push(response.data);
    }).catch(response => {
      var [message] = response.data;
      this.Messages.set({ message, type: 'danger' });
    });
  }

  updateProject(index, params) {
    return this.Project.update(params).then(response => {
      var project = this.projects[index];
      extend(project, response.data);
    }).catch(response => {
      var [message] = response.data;
      this.Messages.set({ message, type: 'danger' });
    });
  }

  deleteProject(index, params) {
    return this.Project.delete(params).then(() => {
      this.projects.splice(index, 1);
    });
  }
}

ProjectsContainerController.$inject = ['Project', 'Messages'];
