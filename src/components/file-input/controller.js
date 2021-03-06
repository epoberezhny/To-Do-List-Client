import { element } from 'angular';

export default class FileInputController {
  constructor($scope, $element) {
    this.$scope   = $scope;
    this.$element = $element;
    this.onChange = this.onChange.bind(this);
  }

  $postLink() {
    var [nativeElement] = this.$element,
        nativeInput     = nativeElement.querySelector('input[type=file]');

    this.$input = element(nativeInput);
    this.$input.on('change', this.onChange);

    if ( this.$element.attr('hidden') ) this.$input.attr('hidden', 'true');
  }

  $onDestroy() {
    this.$input.off('change', this.onChange);
  }

  onChange(event) {
    var input  = event.target,
        [file] = input.files;

    if ( !file ) { this.resetPreview(); return; }

    this.model.$setViewValue(file);

    if (this.model.$invalid) { this.resetPreview(); return; }

    var reader = new FileReader();
    
    reader.onload = (event) => {
      this.preview = event.target.result;
      this.$scope.$apply();
    };

    reader.readAsDataURL(file);
  }

  resetPreview() {
    if ( !this.preview ) return;
    this.preview = null;
    this.$scope.$apply();
  }
}

FileInputController.$inject = ['$scope', '$element'];
