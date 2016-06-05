var app = angular.module('mydirectiveSkill', []);
app.directive('mySkills',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      myTabName: '=myTabName',
    },
    templateUrl: 'template/skills.html',
    controller:function($scope){
      $scope.listSkills=myfactory.gotListSkill();
      console.log("hello skills");
      console.log($scope.listSkills);
    },
  }
}]);
app.directive('mySkill',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      name:'@',
      pourcentage:'@',
      comment:'@',
    },
    templateUrl: 'template/skill.html',
    controller:function($scope,$interval){
      $scope.pourcentage_anim=0;
      var Myannim;
      console.log("hello skill");
      if($scope.name==='C++') $scope.logo="/image/skill/cplusplus.png";
      if($scope.name==='AngularJs') $scope.logo="/image/skill/angular.png";
      if($scope.name==='Français') $scope.logo="/image/flagFr.png";
      if($scope.name==='Anglais') $scope.logo="/image/flagUk.png";
      if($scope.name==='Coréen') $scope.logo="/image/flagKr.png";
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
