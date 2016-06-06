var app = angular.module('mydirectiveHobbies', ['angular-scroll-animate']);
app.directive('myHobbies',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      myLangue:'=langue'
    },
    templateUrl: 'template/hobbies.html',
    controller:function($scope){
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
    },
    link:function(scope,element,attrs){
      scope.$watch('myLangue',function(){
        scope.Reqhobbies=myfactory.gotHobbies(scope.myLangue);
        scope.hobbies=scope.Reqhobbies.data;
      });
    }
  }
}]);
