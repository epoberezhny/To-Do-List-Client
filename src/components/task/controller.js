export default class TaskController {
  constructor($state) {
    this.$state        = $state
    this.opened        = false;
    this.popoverOpened = false;
  }

  toggleDone(event) {
    event.preventDefault();

    var taskParams = {
      id: this.task.id,
      done: !this.task.done
    };

    this.updateTask({ params: taskParams });
  }

  deadlineClass() {
    if ( Date.parse(this.task.deadline) - Date.now() > 0 ) {
      return 'text-success';
    } else {
      return 'text-danger';
    }
  }

  toggleOpened() {
    this.opened = !this.opened;
  }

  togglePopover() {
    this.popoverOpened = !this.popoverOpened;
  }

  openDeleteModal() {
    var params = {
      item: this.task,
      itemType: 'task',
      deleteItem: this.deleteTask
    };

    this.$state.go('modal.delete', params);
  }

  openComments() {
    var params = {
      projectId: this.task['project_id'],
      taskId: this.task.id,
      comments: this.task.comments,
      setComments: (comments) => { this.setComments(comments) }
    };

    this.$state.go('modal.comments', params)
  }

  setComments(comments) {
    this.task.comments = comments;
  }

  countComments() {
    if (this.task.comments) return this.task.comments.length;
    return this.task['comments_count'];
  }
}

TaskController.$inject = ['$state'];
