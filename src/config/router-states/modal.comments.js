const commentsState = {
  url: '/projects/:projectId/tasks/:taskId/comments',
  component: 'tdlCommentsContainer',
  data: {
    title: 'Comments'
  },
  params: {
    comments: {
      value: null,
      dynamic: true
    },
    setComments: null
  }
}

export default commentsState;
