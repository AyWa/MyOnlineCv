var myapp = angular.module('myappCv', ['angular-timeline','angular-scroll-animate']);

myapp.controller('mesExp',function($scope){
  $scope.mesExperiences = [{
      type: 'study',
      title_type: 'Ecole d\'ingénieur',
      title_name:'ECE paris',
      link_name:'http://www.ece.fr/ecole-ingenieur/cursus/specialisations/majeures/systemes-embarques/',
      location: 'France',
      majeur:'Système embarqués',
      when_started: new Date(2013,8,1),
      when_finished: new Date(2017,6,1),
      content: 'yoloooooooooooooo.'
    }, {
      type: 'work',
      title_type: 'IOs Developper',
      title_name:'Company name',
      location: 'Korea',
      when_started: new Date(2013,8,1),
      when_finished: 'Actual',
      content: 'More awesome content.'
    }
    , {
      type: 'project',
      title: 'Second heading',
      location: 'Korea',
      when_started: new Date(2013,8,1),
      when_finished: new Date(2017,6,1),
      content: 'More awesome content.'
    }
  ];
  for(var i=0;i<$scope.mesExperiences.length;i++)
  {
    if($scope.mesExperiences[i].type=="project"||$scope.mesExperiences[i].type=="work")
    {
          $scope.mesExperiences[i].side='left';
          $scope.mesExperiences[i].badgeClass= 'info';
          if($scope.mesExperiences[i].type=="project") $scope.mesExperiences[i].badgeIconClass='fi-lightbulb';
          else $scope.mesExperiences[i].badgeIconClass='fi-clipboard-notes';
    }
    else {
      $scope.mesExperiences[i].side= 'right';
      $scope.mesExperiences[i].badgeClass= 'warning'
      $scope.mesExperiences[i].badgeIconClass='fi-book-bookmark';
    }
    if($scope.mesExperiences[i].location==='Korea')  $scope.mesExperiences[i].flagLocation='image\\flagKr.png';
    if($scope.mesExperiences[i].location==='France') $scope.mesExperiences[i].flagLocation='image\\flagFr.png';
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
