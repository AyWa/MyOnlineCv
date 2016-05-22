var app = angular.module('mydirectiveTop', []);
app.directive('mySummary',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
    },
    templateUrl: 'template/summary.html',
    controller:function($scope){
      $scope.myPers= myfactory.gotPers();
      console.log("hello summary");
      console.log($scope.myPers);
    }
  }
}]);
