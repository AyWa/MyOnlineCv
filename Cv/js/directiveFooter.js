var app = angular.module('mydirectiveFooter', []);
app.directive('myFooter',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    templateUrl: 'template/footer.html',
    controller:function($scope){
      console.log("hello footer");
      $scope.myPers=myfactory.gotPers();
      console.log($scope.myPers.email);
    },
    link:function(scope,element,attrs)
    {
    }
  }
}]);
