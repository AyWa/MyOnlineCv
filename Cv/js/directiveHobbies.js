var app = angular.module('mydirectiveHobbies', ['angular-scroll-animate']);
app.directive('myHobbies',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
    },
    templateUrl: 'template/hobbies.html',
    controller:function($scope){
      $scope.hobbies=myfactory.gotHobbies();
      console.log('hello Hobbies');
      $scope.animateElementIn = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated fadeInUp');
      };
      // optional: not mandatory (uses angular-scroll-animate)
      $scope.animateElementOut = function($el) {
        $el.addClass('hidden');
        $el.removeClass('animated fadeInUp');
      };
    }
  }
}]);
