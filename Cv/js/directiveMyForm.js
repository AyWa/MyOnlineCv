var app = angular.module('mydirectiveForm', []);
app.directive('showInvalid', [function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    priority: 1, // force the postLink below to run after other directives
    link: function (scope, element, attrs, modelCtrl) {
      modelCtrl.$parsers.push(function (viewValue) {
        console.log(viewValue);
        console.log(modelCtrl.$viewValue);
        return (viewValue === undefined) ? modelCtrl.$viewValue : viewValue;
      });
    }
  }
}]);
