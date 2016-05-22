var app = angular.module('myCvservice', []);
app.factory('myfactory',[function(){
  var dataExp =[{
      type: 'study',
      title_type: 'Ecole d\'ingénieur',
      title_name:'ECE paris',
      link_name:'http://www.ece.fr/ecole-ingenieur/cursus/specialisations/majeures/systemes-embarques/',
      location: 'France',
      when_started: new Date(2013,8,1),
      when_finished: new Date(2017,6,1),
      content: 'Étudiant à l\'École Centrale d\'Électronique (ECE) Paris.',
      majeur: 'Système-embarqué',
      OA: 'Robotique',
      mineur: 'Management de projet',
      diploma: 'Diplome d\'ingénieur',
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
  var dataPers={
    photo: '/image/cv.png',
    firstname: 'Marc',
    lastname: 'Hurabielle',
    adresse: '16, avenue Duval le Camus.',
    city: 'Saint-Cloud',
    postal_code: '92210',
    country: 'France',
    birth: new Date(1994,9-1,22),
    phone: '+33620008703',
    email: 'marc.hurabielle@gmail.com',
    content: 'Embedded System Student at ECE Engineering school at Paris.',
    mobility: 'Permis B',
  };
  var computerSkills=[{
    name: 'C++',
    level: '80',
    },{
      name: 'AngularJs',
      level: '80',
    },{
      name: 'C++',
      level: '50',
    },{
      name: 'AngularJs',
      level: '20',
    },{
      name: 'AngularJs',
      level: '100',
    },{
      name: 'AngularJs',
      level: '30',
    },{
      name: 'AngularJs',
      level: '20',
  }];
  var langueSkills=[{
      name: 'Français',
      level: '100',
      comment: 'natif',
    },{
      name: 'Anglais',
      level: '80',
      comment: 'Toeic: 875',
    },{
      name: 'Coréen',
      level: '10',
      comment: 'débutant'
    }
  ];
  var listSkills=[
    {
      name: 'Computer Skills',
      skills: computerSkills,
    },
    {
      name: 'Langues',
      skills: langueSkills,
    },
  ];
  return{
    gotExp: function(){
      return dataExp;
    },
    gotPers: function(){
      return dataPers;
    },
    gotListSkill:function(){
      return listSkills;
    },
  }
}]);
