var app = angular.module('mydirectiveFooter', []);
app.directive('myFooter',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    templateUrl: 'template/footer.html',
    controller:function($scope){
      console.log("hello footer");
    },
    link:function(scope,element,attrs)
    {
    }
  }
}]);
