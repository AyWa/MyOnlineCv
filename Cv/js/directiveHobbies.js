var app = angular.module('mydirectiveHobbies', []);
app.directive('myHobbies',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
    },
    templateUrl: 'template/hobbies.html',
    controller:function($scope){
      $scope.hobbies=myfactory.gotHobbies();
      console.log('hello Hobbies');
    }
  }
}]);
