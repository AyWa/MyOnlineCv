var app = angular.module('mydirectiveSummary', []);
app.directive('mySummary',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      incanvas :'@incanvas',
      myLangue:'=langue'
    },
    templateUrl: 'template/summary.html',
    controller:function($scope){
      console.log("hello summary");
      $scope.myPers={};
    },
    link:function(scope,element,attrs)
    {
      scope.$watch('myLangue',function(){
        scope.AnswRequete= myfactory.gotPers(scope.myLangue);
        scope.myPers=scope.AnswRequete.data;
      });
    }
  }
}]);
