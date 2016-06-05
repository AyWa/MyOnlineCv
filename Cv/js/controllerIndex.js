var myApp = angular.module('controllerIndex', ['myCvservice']);

myApp.controller('indexController', ['$scope','myfactory' ,function($scope,myfactory) {
  $scope.mesId=myfactory.gotMenu();
  console.log($scope.mesId);
}]);
