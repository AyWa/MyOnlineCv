var app = angular.module('mydirectiveFooter', []);
app.directive('myFooter',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    templateUrl: 'template/footer.html',
    controller:function($scope){
      console.log("hello footer");
      $scope.MyMessage={
        name: "",
        email: "",
        message: "",
      };
      $scope.myPers=myfactory.gotPers();
      $scope.sendMessage = function(){
        console.log("submit");
        console.log($scope.MyMessage);
        $scope.MyMessage={};
        $scope.myForm.$setPristine();
        $scope.length_tf=0;
      }
    },
    link:function(scope,element,attrs)
    {
    }
  }
}]);
