import template from './template.html';
import controller from './controller';

const HeaderComponent = {
  template,
  controller,
  bindings: {
    user: '<'
  }
}

export default HeaderComponent;
