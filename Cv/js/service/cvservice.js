var app = angular.module('myCvservice', []);
app.factory('myfactory',[function(){
  var data =[{
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
      title_type: 'Project name',
      title_name:'xxx',
      location: 'France',
      when_started: new Date(2013,8,1),
      when_finished: new Date(2017,6,1),
      content: 'More awesome content.'
    }
  ];
  return{
    gotExp: function(){
      return data;
    },
  }
}]);
