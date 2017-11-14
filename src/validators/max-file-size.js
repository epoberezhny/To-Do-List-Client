export default function maxFileSizeValidator() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function($scope, $element, $attrs, model) {
      var maxSize = parseInt( $attrs['maxFileSize'] );

      model.$validators.maxFileSize = function(modelValue) {
        if ( model.$isEmpty(modelValue) ) return true;
        if ( modelValue.size <= maxSize ) return true;
        return false;
      };
    }
  };
}
