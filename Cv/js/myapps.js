var myapp = angular.module('myappCv', ['angular-timeline','angular-scroll-animate']);

myapp.controller('mesExp',function($scope){
  $scope.mesExperiences = [{
      type: 'study',
      title: 'Ecole d\'ingénieur, ECE paris',
      location: 'France',
      majeur:'Système embarqués',
      when_started: new Date(2013,8,1),
      when_finished: new Date(2017,6,1),
      content: 'yoloooooooooooooo.'
    }, {
      type: 'work',
      title: 'Second heading',
      when:'date ici',
      content: 'More awesome content.'
    }
  ];
  for(var i=0;i<$scope.mesExperiences.length;i++)
  {
    if($scope.mesExperiences[i].type=="project"||$scope.mesExperiences[i].type=="work")
    {
          $scope.mesExperiences[i].side='left';
          $scope.mesExperiences[i].badgeClass= 'info';
          $scope.mesExperiences[i].badgeIconClass='fi-monitor';
    }
    else {
      $scope.mesExperiences[i].side= 'right';
      $scope.mesExperiences[i].badgeClass= 'warning'
      $scope.mesExperiences[i].badgeIconClass='fi-book-bookmark';
    }

    console.log($scope.mesExperiences[i]);
  }
  console.log($scope.mesExperiences.length);
  $scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};
});
