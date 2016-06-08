var myApp = angular.module('controllerIndex', ['myCvservice']);

myApp.controller('indexController', ['$scope','myfactory' ,function($scope,myfactory) {
  $scope.Actual_Langue='Francais'
  $scope.MonMenue=myfactory.gotMenu($scope.Actual_Langue);
  $scope.mesId=$scope.MonMenue.menu;
  $scope.Actual_Langue=$scope.MonMenue.langue;
  $scope.$watch('Actual_Langue',function(){
    console.log("test");
    $scope.MonMenue=myfactory.gotMenu($scope.Actual_Langue);
    $scope.mesId=$scope.MonMenue.menu;
    $scope.doScroll=function(nameid){
      nameid = '#'+nameid;
      scrollTo(nameid);
    };
    $scope.resetmyverticalmenue=function(id){
      id='#'+id;
      $(id).foundation('_hideAll');
    }
    var scrollTo = function (element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top
        }, 1000);
    };
  });
}]);
