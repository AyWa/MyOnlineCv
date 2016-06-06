var app = angular.module('mydirectiveSkill', []);
app.directive('mySkills',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      myLangue:'=langue',
      myTabName: '=myTabName',
    },
    templateUrl: 'template/skills.html',
    controller:function($scope){
      console.log("hello skills");
    },
    link:function(scope,element,attrs){
      scope.$watch('myLangue',function(){
        scope.reqListSkills=myfactory.gotListSkill(scope.myLangue);
        scope.listSkills=scope.reqListSkills.data;
      });
    }
  }
}]);
app.directive('mySkill',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      name:'@',
      pourcentage:'@',
      comment:'@',
      imgurl:'@',
    },
    templateUrl: 'template/skill.html',
    controller:function($scope,$interval){
      $scope.pourcentage_anim=0;
      var Myannim;
      console.log("hello skill");
      $scope.logo=$scope.imgurl;
      /*$scope.animload = $interval(function(){
         $scope.pourcentage_anim+=2;
         if($scope.pourcentage_anim>=$scope.pourcentage) $interval.cancel($scope.animload);
      },30);*/
      $scope.animateElementIn = function($el) {
        $el.removeClass('hidden');
        if($scope.pourcentage_anim<$scope.pourcentage) $scope.startanimload();
      };
      // optional: not mandatory (uses angular-scroll-animate)
      $scope.animateElementOut = function($el) {
        $el.addClass('hidden');
        $scope.pourcentage_anim=0;
        if (angular.isDefined(Myannim)) {
          $interval.cancel(Myannim);
          Myannim = undefined;
        }
      };
      $scope.startanimload = function(){
        if ( angular.isDefined(Myannim) ) return;
        Myannim = $interval(function(){
          $scope.pourcentage_anim+=2;
          if ($scope.pourcentage_anim>=$scope.pourcentage) {
            if (angular.isDefined(Myannim)) {
              $interval.cancel(Myannim);
              Myannim = undefined;
            }
          }
        }, 30);
      };
    },
    link: function(scope,elem,attrs){
    }
  }
}]);
