var app = angular.module('mydirectiveTopBar', []);
app.directive('myTopBar',['myfactory',function(myfactory){
  return{
    restrict: 'E',
    templateUrl: 'template/topbar.html',
    controller:function($scope){
      $mesId=myfactory.gotMenu();
      $(document).foundation();
      console.log("hello top bar");
    },
    link:function(scope,element,attrs)
    {
      scope.test=function(nameid){
        nameid = '#'+nameid;
        scrollTo(nameid);
      }
      var scrollTo = function (element) {
          $('html, body').animate({
              scrollTop: $(element).offset().top
          }, 1000);
      }
    }
  }
}]);
