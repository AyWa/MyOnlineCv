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
  var dataExp =[
    {
      langue:"Francais",
      data:[{
        type: 'study',
        title_type: 'Ecole d\'ingénieur',
        title_name:'ECE paris',
        link_name:'http://www.ece.fr/ecole-ingenieur/cursus/specialisations/majeures/systemes-embarques/',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2013,8,1),
        when_finished: new Date(2017,6,1),
        content: 'Étudiant à l\'École Centrale d\'Électronique (ECE) Paris.',
        majeur: 'Système-embarqué',
        OA: 'Robotique',
        mineur: 'Management de projet',
        diploma: 'Diplome d\'ingénieur',
        },{
        type: 'work',
        title_type: 'Developper Ios',
        title_name:'nom',
        location: 'Corée du Sud',
        flagLocation: '../image/flagKr.png',
        when_started: new Date(2013,8,1),
        when_finished: 'Actuel',
        content: 'plus de contenu.'
        },{
        type: 'project',
        title_type: 'Nom du projet',
        title_name:'xxx',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2013,8,1),
        when_finished: new Date(2017,6,1),
        content: 'plus de contenu.'
        }]
    },
    {
      langue:"English",
      data:[{
        type: 'study',
        title_type: 'Engineering school',
        title_name:'ECE paris',
        link_name:'http://www.ece.fr/ecole-ingenieur/cursus/specialisations/majeures/systemes-embarques/',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2013,8,1),
        when_finished: new Date(2017,6,1),
        content: 'Student at (ECE) Paris.',
        majeur: 'Embedded System',
        OA: 'Robotique',
        mineur: 'Project management',
        diploma: 'Engineering Master degree',
        },{
        type: 'work',
        title_type: 'IOs Developper',
        title_name:'Company name',
        location: 'Korea',
        flagLocation: '../image/flagKr.png',
        when_started: new Date(2013,8,1),
        when_finished: 'Actual',
        content: 'More awesome content.'
        },{
        type: 'project',
        title_type: 'Project name',
        title_name:'xxx',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2013,8,1),
        when_finished: new Date(2017,6,1),
        content: 'More awesome content.'
        }]
    }
  ]
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
  var computerSkills={
    Fr:[{
      url: "/image/skill/cplusplus.png",
      name: 'C++',
      level: '80',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '80',
      },{
        url: "/image/skill/cplusplus.png",
        name: 'C++',
        level: '50',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '20',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '100',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '30',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '20',
    }],
    En:[{
      url: "/image/skill/cplusplus.png",
      name: 'C++',
      level: '80',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '80',
      },{
        url: "/image/skill/cplusplus.png",
        name: 'C++',
        level: '50',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '20',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '100',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '30',
      },{
        url:"/image/skill/angular.png",
        name: 'AngularJs',
        level: '20',
    }]
  }
  var langueSkills=
    {
      Fr:[
        {
          url: '../image/flagFr.png',
          name: 'Français',
          level: '100',
          comment: 'Langue maternelle',
        },{
          url: '../image/flagUk.png',
          name: 'Anglais',
          level: '80',
          comment: 'Professionel, Toeic: 875',
        },{
          url: '../image/flagKr.png',
          name: 'Coréen',
          level: '10',
          comment: 'Débutant'
        }
      ],
      En:[
        {
          url: '../image/flagFr.png',
          name: 'French',
          level: '100',
          comment: 'Native language',
        },{
          url: '../image/flagUk.png',
          name: 'English',
          level: '80',
          comment: 'Professional, Toeic: 875',
        },{
          url: '../image/flagKr.png',
          name: 'Korean',
          level: '10',
          comment: 'Beginner'
        }
      ]
    };
  var listSkills=[{
    langue:'Francais',
    data:[{
        skills: computerSkills.Fr,
      },
      {
        skills: langueSkills.Fr,
      },
    ]},{
    langue:'English',
    data:[{
        skills: computerSkills.En,
      },
      {
        skills: langueSkills.En,
      },
    ]
  }];
  var Hobbies=[{
    langue: 'Francais',
    data: [
      {
        name:'Voyage',
        icone:'fi-compass',
      },{
        name:'Cinéma',
        icone:'fi-play-video',
      },{
        name:'Sport',
        icone:'fi-heart',
      },{
        name:'Musique',
        icone:'fi-music',
      },{
        name:'Randonnée',
        icone:'fi-mountains',
      }
      ,{
        name:'Photographie',
        icone:'fi-photo',
      }
    ]
    },{
    langue: 'English',
    data:[
      {
        name:'Travel',
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
        name:'Photography',
        icone:'fi-photo',
      }
    ]
  }];
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
      for(var j=0;j<dataExp.length;j++)
      {
        if(dataExp[j].langue==langue)
        {
          return dataExp[j];
          break;
        }
      }
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
      for(var j=0;j<listSkills.length;j++)
      {
        if(listSkills[j].langue==langue)
        {
          return listSkills[j];
          break;
        }
      }
    },
    gotHobbies:function(langue){
      for(var i=0;i<Hobbies.length;i++)
      {
        if(Hobbies[i].langue===langue)
        {
          return Hobbies[i];
          break;
        }
      }
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
