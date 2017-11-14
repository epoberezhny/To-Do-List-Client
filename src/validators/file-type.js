export default function fileTypeValidator() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function($scope, $element, $attrs, model) {
      var fileTypes   = $attrs['fileType'],
          matchString = fileTypes.replace(', ', '|'),
          typesRegexp = new RegExp(matchString);

      model.$validators.fileType = function(modelValue) {
        if ( model.$isEmpty(modelValue) ) return true;
        if ( typesRegexp.test(modelValue.type) ) return true;
        return false;
      };
    }
  };
}
