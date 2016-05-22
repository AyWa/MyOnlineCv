var app = angular.module('mydirectiveSkill', []);
app.directive('mySkills',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
    },
    templateUrl: 'template/skills.html',
    controller:function($scope){
      $scope.computerskills=myfactory.gotSkill();
      console.log("hello skills");
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
      if($scope.name==='AngularJs') $scope.logo="/image/skill/angular.png"
    }
  }
}]);
