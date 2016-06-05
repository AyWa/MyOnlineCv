var app = angular.module('mydirectiveTopBar', []);
app.directive('myTopBar',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    templateUrl: 'template/topbar.html',
    scope:{
      myLangue:'=langue'
    },
    controller:function($scope){
      $(document).foundation();
      $scope.languesiconesselect='';
      $scope.meslangues=myfactory.gotLangues();
      console.log($scope.meslangues);
      console.log("hello top bar");
    },
    link:function(scope,element,attrs)
    {
      scope.test=function(nameid){
        nameid = '#'+nameid;
        scrollTo(nameid);
      };
      scope.Change_Langue=function(name_select){
        scope.myLangue=name_select;
      };
      scope.$watch('myLangue',function(){
        scope.MonMenue=myfactory.gotMenu(scope.myLangue);
        scope.mesId=scope.MonMenue.menu;
        for(var i=0;i<scope.meslangues.length;i++){
          if(scope.meslangues[i].N_langue===scope.myLangue)
          {
            scope.languesiconesselect=scope.meslangues[i].url;
          }
        }
      });
      var scrollTo = function (element) {
          $('html, body').animate({
              scrollTop: $(element).offset().top
          }, 1000);
      };
    }
  }
}]);
