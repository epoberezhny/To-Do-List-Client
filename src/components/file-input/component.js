import template from './template.html';
import controller from './controller';

const FileInputComponent = {
  template,
  controller,
  require: {
    model: 'ngModel'
  },
  bindings: {
    preview: '='
  }
};

export default FileInputComponent;
