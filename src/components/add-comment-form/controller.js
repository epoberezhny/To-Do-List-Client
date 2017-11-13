export default class AddCommentFormController {
  constructor() {
    this.commentParams = {};
  }

  onSubmit(form) {
    if (form.$invalid) return;
    if (Object.keys(this.commentParams).length === 0) return;

    this.createComment({ params: this.commentParams }).then(() => {
      this.clear();
    });
  }

  clear() {
    this.commentParams = {},
    this.preview = null;
  }
}
