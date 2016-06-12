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
      },{
        id: "contact",
        name:"Me contacter"
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
      },{
        id: "contact",
        name:"Contact me"
      }
    ]
  }];
  var selectExp=[
    {langue:"Francais",
    data:[
      {name: 'Etude'},
      {name: 'Projets'},
      {name: 'Travail'},
      {name: 'All'},
      {name: 'Highlight'},
    ]},{
    langue:"English",
    data:[
      {name: 'Study'},
      {name: 'Project'},
      {name: 'Work'},
      {name: 'All'},
      {name: 'Highlight'},
    ]}
  ]
  var dataExp =[
    {
      langue:"Francais",
      data:[{
        Highlight: true,
        type: selectExp[0].data[0].name,
        title_type: 'Ecole d\'ingénieur',
        title_name:'ECE paris',
        link_name:'http://www.ece.fr/ecole-ingenieur/cursus/specialisations/majeures/systemes-embarques/',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2013,8,1),
        when_finished: new Date(2017,6,1),
        content: 'Projets réalisés: Système de Détermination et de Contrôle de l\'Altitude (ACDS) d\'un Nanosatellite CubeSat Réalisation d\'un drone GPS.',
        majeur: 'Systèmes embarqués',
        OA: 'Robotique',
        mineur: 'Management de projet',
        diploma: 'Diplome d\'ingénieur',
      },{
        Highlight: true,
        type: selectExp[0].data[1].name,
        title_type: 'Projet de l\année prochaine à l\' ECE',
        title_name:'name',
        link_name:'http://www.ece.fr/ecole-ingenieur/cursus/specialisations/majeures/systemes-embarques/',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2016,8,1),
        when_finished: new Date(2017,2-1,1),
        content: 'XXXXXXXX ',
        majeur: 'Systèmes embarqués',
      },{
        Highlight: true,
        type: selectExp[0].data[0].name,
        title_type: 'MOOC',
        title_name:'Université de Standford',
        link_name:'https://www.coursera.org/learn/machine-learning',
        location: 'USA',
        flagLocation: '../image/flagUsa.png',
        when_started: new Date(2016,8,1),
        content: 'Suivi d\'un Massive Open Online Course (MOOC) en anglais de l\'université de Standford sur l\'apprentissage automatique.',
        diploma: 'Certificat de réussite',
      },{
        Highlight: true,
        type: selectExp[0].data[2].name,
        title_type: 'Stagiaire en qualité et innovation',
        title_name:'Aubay',
        link_name:'http://www.aubay.com/',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2016,4-1,11),
        when_finished: new Date(2016,7-1,29),
        content: 'Développement d\'une plateforme de domotique utilisant le protocole de domotique z-Wave et une Raspberry-Pi comme serveur.'
      },{
        Highlight: true,
        type: selectExp[0].data[1].name,
        title_type: 'Projet de quatrième année à l\' ECE',
        title_name:'ECE3SAT - ADCS',
        link_name:'http://www.ece.fr/ecole-ingenieur/cursus/specialisations/majeures/systemes-embarques/',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2016,8,1),
        when_finished: new Date(2017,2-1,1),
        content: 'Le projet ECE3SAT vise à concevoir, développer et lancer un nanosatellite étudiant qui est conforme aux normes de cubesats. La mission de notre CubeSat est d\'apporter une nouvelle solution à la question des débris spatiaux en proposant un nouveau système de désorbitation afin de ne pas produire plus de débris.Le CubeSat testera un système de désorbitation utilisant les interactions avec le champ magnétique terrestre pour se ralentir jusqu\'à se désintégrer dans l\'atmosphère ce qui ne générera pas de débris spatiaux.',
      },{
        Highlight: true,
        type: selectExp[0].data[0].name,
        title_type: 'Échange',
        title_name:'Kyungpook National University',
        link_name:'http://en.knu.ac.kr/',
        location: 'Corée du sud',
        flagLocation: '../image/flagKr.png',
        when_started: new Date(2014,8-1,27),
        when_finished: new Date(2015,6-1,29),
        content: 'Échange d\'un an en Corée du Sud KNU: Kyungpook National University Daegu Majeur: Électronique',
        majeur: 'Électronique',
      },{
        Highlight: true,
        type: selectExp[0].data[2].name,
        title_type: 'Développeur IOS',
        title_name:'Nomit',
        link_name:'http://nomits.com/',
        location: 'Corée du Sud',
        flagLocation: '../image/flagKr.png',
        when_started: new Date(2015,1-1,1),
        when_finished: new Date(2015,2-1,20),
        content: 'Développement d\'une application de suivi de régime sur IOS pour une balance connectée.'
        },{
        Highlight: false,
        type: selectExp[0].data[1].name,
        title_type: 'Projet de deuxième année à l\' ECE',
        title_name:'Drone GPS',
        link_name:'http://www.ece.fr/ecole-ingenieur/cursus/specialisations/majeures/systemes-embarques/',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2013,9-1,1),
        when_finished: new Date(2014,7-1,1),
        content: 'Réalisation d\'un drone GPS',
        },{
        Highlight: false,
        type: selectExp[0].data[0].name,
        title_type: 'Classes préparatoires MPSI',
        title_name:'Fénelon Sainte Marie',
        location: 'France',
        flagLocation: '../image/flagFr.png',
        when_started: new Date(2013,8,1),
        when_finished: new Date(2017,6,1),
        content: 'Projet réalisé: Phénomène de la physique appliqués aux appareils médicaux.',
        majeur: 'Maths et physique',
        mineur: 'Sciences de l\'Ingénieur'
      },{
      Highlight: false,
      type: selectExp[0].data[0].name,
      title_type: 'Baccalauréat scientifique',
      title_name:'Lycée Eugène Ionesco',
      location: 'France',
      flagLocation: '../image/flagFr.png',
      when_started: new Date(2009,9-1,1),
      when_finished: new Date(2012,7-1,1),
      content: 'Projets réalisés: Réalisation d\'un ouvre bouteille automatique Conception 3d d\'un robot nettoyeur de coques de bateaux.  ',
      majeur: 'Sciences de l\'ingénieur et mathématiques',
      diploma: 'Mention bien',
      }]
    },
    {
      langue:"English",
      data:[{
        type: selectExp[1].data[0].name,
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
        type: selectExp[1].data[2].name,
        title_type: 'IOs Developper',
        title_name:'Company name',
        location: 'Korea',
        flagLocation: '../image/flagKr.png',
        when_started: new Date(2013,8,1),
        when_finished: 'Actual',
        content: 'More awesome content.'
        },{
        type: selectExp[1].data[1].name,
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
      adresse: '16, avenue Duval le Camus',
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
      name: 'C/C++',
      level: '100',
      },{
        url: "/image/skill/angular.png",
        name: 'AngularJs',
        level: '90',
      },{
        url:"/image/skill/javascript.png",
        name: 'Javascript',
        level: '80',
      },{
        url:"/image/skill/nodejs.png",
        name: 'NodeJS',
        level: '80',
      },{
        url:"/image/skill/python.png",
        name: 'Python',
        level: '60',
      },{
        url:"/image/skill/csharp.png",
        name: 'C#',
        level: '70',
      },{
        url:"/image/skill/java.png",
        name: 'Java',
        level: '60',
      },{
        url:"/image/skill/Octave.png",
        name: 'Octave/Matlab',
        level: '60',
      },{
        url:"/image/skill/html.png",
        name: 'Html/CSS',
        level: '70',
      },{
        url:"/image/skill/objectiveC.png",
        name: 'Objective-C',
        level: '30',
      },{
        url:"/image/skill/linux.png",
        name: 'linux',
        level: '50',
      },{
        url:"/image/skill/office.png",
        name: 'Suite Office',
        level: '50',
      },{
        url:"",
        name: 'VHDL',
        level: '30',
      },{
        url:"",
        name: 'Assembleur PIC',
        level: '30',
      }],
    En:[{
      url: "/image/skill/cplusplus.png",
      name: 'C/C++',
      level: '100',
      },{
        url: "/image/skill/angular.png",
        name: 'AngularJs',
        level: '90',
      },{
        url:"/image/skill/javascript.png",
        name: 'Javascript',
        level: '80',
      },{
        url:"/image/skill/nodejs.png",
        name: 'NodeJS',
        level: '80',
      },{
        url:"/image/skill/python.png",
        name: 'Python',
        level: '60',
      },{
        url:"/image/skill/csharp.png",
        name: 'C#',
        level: '70',
      },{
        url:"/image/skill/java.png",
        name: 'Java',
        level: '60',
      },{
        url:"/image/skill/Octave.png",
        name: 'Octave/Matlab',
        level: '60',
      },{
        url:"/image/skill/html.png",
        name: 'Html/CSS',
        level: '70',
      },{
        url:"/image/skill/objectiveC.png",
        name: 'Objective-C',
        level: '30',
      },{
        url:"/image/skill/linux.png",
        name: 'linux',
        level: '50',
      },{
        url:"/image/skill/office.png",
        name: 'Suite Office',
        level: '50',
      },{
        url:"",
        name: 'VHDL',
        level: '30',
      },{
        url:"",
        name: 'Assembleur PIC',
        level: '30',
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
      help_name: "Your name",
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
    gotSelectExp:function(langue){
      for(var j=0;j<selectExp.length;j++)
      {
        if(selectExp[j].langue==langue)
        {
          return selectExp[j];
          break;
        }
      }
      return selectExp;
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
