var app = angular.module('mydirectiveSummary', []);
app.directive('mySummary',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      incanvas :'@incanvas'
    },
    templateUrl: 'template/summary.html',
    controller:function($scope){
      $scope.myPers= myfactory.gotPers();
      console.log("hello summary");
      console.log($scope.myPers);
    }
  }
}]);
