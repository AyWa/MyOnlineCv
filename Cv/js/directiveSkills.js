var app = angular.module('mydirectiveSkill', []);
app.directive('mySkills',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
    },
    templateUrl: 'template/skills.html',
    controller:function($scope){
      $scope.listSkills=myfactory.gotListSkill();
      console.log("hello skills");
      console.log($scope.listSkills);
    }
  }
}]);
app.directive('mySkill',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      name:'@',
      pourcentage:'@',
    },
    templateUrl: 'template/skill.html',
    controller:function($scope){
      console.log("hello skill");
      if($scope.name==='C++') $scope.logo="/image/skill/cplusplus.png";
      if($scope.name==='AngularJs') $scope.logo="/image/skill/angular.png";
      if($scope.name==='Français') $scope.logo="/image/flagFr.png";
      if($scope.name==='Anglais') $scope.logo="/image/flagUk.png";
      if($scope.name==='Coréen') $scope.logo="/image/flagKr.png";
    }
  }
}]);
