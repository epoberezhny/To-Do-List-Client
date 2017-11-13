import { element } from 'angular';

export default class AddCommentFormController {
  constructor($element, $scope) {
    this.$element      = $element;
    this.$scope        = $scope;
    this.commentParams = {};
  }

  onChange(event) {
    var input = event.target,
        file  = input.files && input.files[0];

    if (!file) return;

    var reader = new FileReader();

    reader.onload = (event) => {
      this.preview = event.target.result;
      this.commentParams.attachment = file;
      this.$scope.$digest();
    };

    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.createComment({ params: this.commentParams }).then(() => {
      this.clear();
    });
  }

  clear() {
    this.commentParams = {},
    this.preview = '';
  }

  $postLink() {
    var input = this.$element[0].querySelector('input[type=file]');
    this.$input = element(input);
    this.$input.on('change', this.onChange.bind(this));
  }

  $onDestroy() {
    this.$input.off('change', this.onChange);
  }
}

AddCommentFormController.$inject = ['$element', '$scope']
