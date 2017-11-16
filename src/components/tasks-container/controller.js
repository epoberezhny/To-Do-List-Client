import { extend, isDefined, forEach } from 'angular';

export default class TasksContainerController {
  constructor(Task, orderBy, Messages) {
    this.Task     = Task;
    this.orderBy  = orderBy;
    this.Messages = Messages
    this.onSort   = this.onSort.bind(this);
  }

  $onInit(params = {}) {
    if ( isDefined(this.tasks) ) return;

    params['project_id'] = this.projectId;

    this.Task.index(params).then(response => {
      this.orderize(response.data);
    });
  }

  createTask(params) {
    params['project_id'] = this.projectId;

    return this.Task.create(params).then(response => {
      this.tasks.push(response.data);
    });
  }

  updateTask(index, params) {
    params['project_id'] = this.projectId;
    
    return this.Task.update(params).then(response => {
      var task = this.tasks[index];
      extend(task, response.data);
      if ( this.allDone() ) {
        this.Messages.set({
          message: "You're successfully completed all the task.",
          type: 'success'
        });
      }
    });
  }

  deleteTask(index, params) {
    return this.Task.delete(params).then(() => {
      this.tasks.splice(index, 1);
      this.prioritize(this.tasks);
    });
  }

  onSort(event) {
    var changedTask = event.model,
        newPriority = event.newIndex + 1;
    
    var params = {
      id: changedTask.id,
      priority: newPriority,
      'project_id': changedTask['project_id']
    };

    this.Task.update(params).then(() => {
      this.prioritize(this.tasks);
    }).catch(() => {
      this.orderize(this.tasks);
    });
  }

  prioritize(tasks) {
    forEach(tasks, (task, index) => {
      task.priority = index + 1;
    });
  }

  orderize(tasks) {
    this.tasks = this.orderBy(tasks, 'priority');
  }

  allDone() {
    return this.tasks.every(task => task.done);
  }
}

TasksContainerController.$inject = ['Task', 'orderByFilter', 'Messages'];
