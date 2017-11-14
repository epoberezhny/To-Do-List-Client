export default class AddCommentFormController {
  onSubmit(form) {
    if (form.$invalid) return;

    this.createComment({ params: this.commentParams }).then(() => {
      this.clear();
      form.$setPristine();
    });
  }

  clear() {
    this.commentParams = {},
    this.preview = null;
  }
}
