var app = angular.module('mydirectiveForm', []);
app.directive('showInvalid', [function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    priority: 1, // force the postLink below to run after other directives
    link: function (scope, element, attrs, modelCtrl) {
      modelCtrl.$parsers.push(function (viewValue) {
        scope.length_tf=modelCtrl.$viewValue.length;
        return (viewValue === undefined) ? modelCtrl.$viewValue : viewValue;
      });
    }
  }
}]);
