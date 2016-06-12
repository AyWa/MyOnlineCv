var app = angular.module('mydirectiveExp', ['angular-timeline','angular-scroll-animate','myCvservice','myCvFilter']);
app.directive('myExp',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    scope:{
      mySectionName: '=mySectionName',
      myLangue:'=langue'
    },
    templateUrl: 'template/exp.html',
    controller:function($scope){
      //get the Exp obj
      $scope.SelectingExp=0;
      $scope.animateElementIn = function($el) {
        $el.removeClass('timeline-hidden');
        $el.addClass('bounce-in');
      };
      // optional: not mandatory (uses angular-scroll-animate)
      $scope.animateElementOut = function($el) {
        $el.addClass('timeline-hidden');
        $el.removeClass('bounce-in');
      };
    },
    link:function(scope,element,attrs){
      scope.$watch('myLangue',function(){
        scope.ReqmesExperiences = myfactory.gotExp(scope.myLangue);
        scope.mesExperiences = scope.ReqmesExperiences.data;
        scope.selectExp= myfactory.gotSelectExp(scope.myLangue).data;
        if(scope.SelectingExp==0) scope.SelectingExp=scope.selectExp[scope.selectExp.length-1].name;
        scope.init(scope);
      });
      scope.init=function($scope){
        for(var i=0;i<$scope.mesExperiences.length;i++)
        {
          if($scope.mesExperiences[i].type==$scope.selectExp[1].name||$scope.mesExperiences[i].type==$scope.selectExp[2].name)
          {
                //$scope.mesExperiences[i].side='left';
                $scope.mesExperiences[i].badgeClass= 'dangerM';
                if($scope.mesExperiences[i].type==$scope.selectExp[1].name){
                  $scope.mesExperiences[i].badgeClass= 'warningM';
                  $scope.mesExperiences[i].badgeIconClass='fi-lightbulb';
                }
                else $scope.mesExperiences[i].badgeIconClass='fi-clipboard-notes';
          }
          else {
            //$scope.mesExperiences[i].side= 'right';
            $scope.mesExperiences[i].badgeClass= 'primaryM'
            $scope.mesExperiences[i].badgeIconClass='fi-book-bookmark';
          }
        }
      };
    }
  }
}]);
