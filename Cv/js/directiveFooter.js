var app = angular.module('mydirectiveFooter', []);
app.directive('myFooter',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    templateUrl: 'template/footer.html',
    scope:{
      myLangue:'=langue',
    },
    controller:function($scope){
      console.log("hello footer");
      $scope.MyMessage={
        name: "",
        email: "",
        message: "",
      };
    },
    link:function(scope,element,attrs)
    {
      scope.$watch('myLangue',function(){
        scope.AnswRequete= myfactory.gotPers(scope.myLangue);
        scope.FooterAnsw= myfactory.gotFooter(scope.myLangue);
        scope.MyFooter= scope.FooterAnsw.data;
        scope.myPers=scope.AnswRequete.data;
      });
      scope.sendMessage = function(){
        console.log("submit");
        console.log(scope.MyMessage);
        scope.MyMessage={};
        scope.myForm.$setPristine();
        scope.length_tf=0;
      }
    }
  }
}]);
