var app = angular.module('myCvservice', []);
app.factory('myfactory',[function(){
  var Langues=[{
    N_langue: "Francais",
    url:"../image/flagFr.png"
    },{
    N_langue: "English",
    url:"../image/flagUk.png"
  }]
  var menu=[{
    langue:"Francais",
    menu:[
      {
        id: "Experience",
        name: "Experiences"
      },{
        id: "Compétences",
        name: "Compétences",
        tab:[{
          id: "ComputerSkills",
          name: "Compétences Informatiques"
        },{
          id: "Langues",
          name: "Langues"
        }],
      },{
        id: "Hobbies",
        name:"Centres d'intérêts"
      }]
    },{
    langue:"English",
    menu:[
      {
        id: "Experiences",
        name: "Experiences"
      },{
        id: "Skills",
        name: "Skills",
        tab:[{
          id: "ComputerSkills",
          name: "Computers Skills"
        },{
          id: "Language",
          name: "Language"
        }],
      },{
        id: "Hobbies",
        name:"Hobbies"
      }
    ]
  }];
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
  var dataPers=[{
    langue: 'Francais',
    data: {
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
      content: 'Étudiant à l\'École Centrale d\’Électronique (ECE) Paris. Majeur: Système embarqué.',
      mobility: 'Permis B',
      linkedin: 'https://fr.linkedin.com/in/marc-hurabielle-55ba1b102'
      }
    },{
    langue: 'English',
    data: {
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
      mobility: 'Driving license',
      linkedin: 'https://www.linkedin.com/in/marc-hurabielle-55ba1b102/en'
    }
  }];
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
      comment: 'Langue maternelle',
    },{
      name: 'Anglais',
      level: '80',
      comment: 'Professionel, Toeic: 875',
    },{
      name: 'Coréen',
      level: '10',
      comment: 'Débutant'
    }
  ];
  var listSkills=[
    {
      skills: computerSkills,
    },
    {
      skills: langueSkills,
    },
  ];
  var Hobbies=[{
      name:'Voyage',
      icone:'fi-compass',
    },{
      name:'Movie',
      icone:'fi-play-video',
    },{
      name:'Sport',
      icone:'fi-heart',
    },{
      name:'Music',
      icone:'fi-music',
    },{
      name:'Hiking',
      icone:'fi-mountains',
    }
    ,{
      name:'Photographie',
      icone:'fi-photo',
    }
  ];
  var Footer=[{
    langue: 'Francais',
    data:{
      formTitle: 'Me contacter',
      name: "Nom",
      help_name: "Votre nom",
      error_name: "Obligatoire",
      email: "Email",
      help_email: "Votre email",
      error_email: "Email non valide",
      message: "Votre message",
      help_message:"500 caractére maximum (5 minimum)",
      error_message: "caractére: ",
      submit_message: "Envoyer",
      workwithme: "travailler avec moi:",
      myLinkedin: "Mon Linkedin"
      }
    },{
    langue: 'English',
    data:{
      formTitle: 'Contact me',
      name: "Name",
      help_name: "Your nom",
      error_name: "required",
      email: "Email",
      help_email: "Your email",
      error_email: "Email unvalid",
      message: "Your message",
      help_message:"500 character maximum (5 minimum)",
      error_message: "character:",
      submit_message: "Submit",
      workwithme: "Work with me:",
      myLinkedin: "My Linkedin"
    }
  }];
  return{
    gotLangues: function(){
      return Langues;
    },
    gotExp: function(langue){
      return dataExp;
    },
    gotPers: function(langue){
      for(var j=0;j<dataPers.length;j++)
      {
        if(dataPers[j].langue==langue)
        {
          return dataPers[j];
          break;
        }
      }
    },
    gotListSkill:function(langue){
      return listSkills;
    },
    gotHobbies:function(langue){
      return Hobbies;
    },
    gotMenu:function(langue){
      for(var i=0;i<menu.length;i++)
      {
        if(menu[i].langue===langue)
        {
          return menu[i];
          break;
        }
      }
    },
    gotFooter:function(langue){
      for(var i=0;i<Footer.length;i++)
      {
        if(Footer[i].langue===langue)
        {
          return Footer[i];
          break;
        }
      }
    }
  }
}]);
