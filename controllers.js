var profileControllers = angular.module('profileControllers', ['ngResource']);

profileControllers.controller('ButtonsCtrl', ['$scope', function($scope) { 
  $scope.quotes = [{
    text: "You are who you choose to be.",
    author: "Iron Giant",
    tags: "Top5 Mindset"
  },{
      text: "Whether you think you can, or think you can't, you're right.",
      author: "Henry Ford",
      tags: "Top5 Mindset"
    },{
        text: "Life isn’t about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
        tags: "Top5 Mindset"
      },{
        text: "If you want to build a ship, don’t drum up people to collect the wood and don’t assign them tasks and work, but rather teach them to long for the immensity of the sea.",
        author: "Antoine De Saint-Exupery",
        tags: "Leadership"
      },{
        text: "The self is not something ready-made, but something in continuous formation through choice of action.",
        author: "John Dewey",
        tags: "Mindset"
      },{
        text: "The sure sign of the amateur is that he has a million plans and they all start tomorrow.",
        author: "Steven Pressfield",
        tags: "Top5"
      },{
        text: "The rung of a ladder was never meant to be rest upon, but only to hold a man’s foot long enough to enable him to put the other somewhat higher.",
        author: "Thomas Huxley",
        tags: "Top5 Mindset"
      },{
        text: "One machine can do the work of 50 ordinary men. No machine can do the work of one extraordinary man.",
        author: "Elbert Hubbard",
        tags: "Limits"
      }             
      ];

}]);

profileControllers.controller('ResumeCtrl', ['$scope',
  function ($scope){
    $scope.levels = [
    "Trained",
    "Novice",
    "Proficient",
    "Advanced",
    "Expert"
    ];

    $scope.skills = [{
      label: "Data Analysis",
      level: "Proficient",
      type: "Functional",
      resume: "Project Manager Developer/UX Researcher"
    },{
      label: "Usability Testing",
      level: "Proficient",
      type: "Functional",
      resume: "Developer/UX Researcher"
    },{
      label: "Strategic Planning",
      level: "Novice",
      type: "Functional",
      resume: ""
    },{
      label: "Project/Program Management",
      level: "Proficient",
      type: "Functional",
      resume: ""
    },{
      label: "Python",
      level: "Proficient",
      type: "Technical",
      resume: ""
    },{
      label: "Microsoft Excel",
      level: "Advanced",
      type: "Technical",
      resume: ""
    },{
      label: "Training/Teaching",
      level: "Advanced",
      type: "Functional",
      resume: ""
    },{
      label: "Research Plan Design",
      level: "Proficient",
      type: "Functional",
      resume: ""
    },{
      label: "Communication Planning and Delivery",
      level: "Proficient",
      type: "Functional",
      resume: ""
    },{
      label: "Mentoring",
      level: "Proficient",
      type: "Functional",
      resume: ""
    },{
      label: "Change Management",
      level: "Proficient",
      type: "Functional",
      resume: ""
    },{
      label: "AngularJS",
      level: "Proficient",
      type: "Technical",
      resume: ""
    },{
      label: "HTML",
      level: "Proficient",
      type: "Technical",
      resume: ""
    },{
      label: "CSS",
      level: "Proficient",
      type: "Technical",
      resume: ""
    },{
      label: "SQL",
      level: "Novice",
      type: "Technical",
      resume: ""
    },{
      label: "Flask",
      level: "Proficient",
      type: "Technical",
      resume: ""
    },{
      label: "Git",
      level: "Novice",
      type: "Technical",
      resume: ""
    },{
      label: "Heroku",
      level: "Novice",
      type: "Technical",
      resume: ""
    },{
      label: "SPSS",
      level: "Novice",
      type: "Technical",
      resume: ""
    },{
      label: "Stakeholder Analysis",
      level: "Proficient",
      type: "Functional",
      resume: ""
    }];
    
    $scope.awards = [
    {
      title: "Best Student Research Poster",
      organization: "Houston Human Factors and Ergonomics Society",
      date: "May 2013",
      summary: "Research on the timed introduction of predictive spell-check on smartphones selected as the Best Student Research Poster at the Houston Human Factors and Ergonomics Society Annual Conference.",
      resume: ""
    },{
      title: "Outstanding Senior Award",
      organization: "Rice University",
      date: "May 2013",
      summary: "Selected for one of 10 campus-wide Outstanding Senior Awards. The awards are given to graduating seniors who have contributed the most to excellence at Rice University.",
      resume: ""
    },{
      title: "Olga Keith Wiess College Service Award",
      organization: "Wiess Residential College - Rice University",
      date: "March 2013",
      summary: "Awarded to the graduating senior who has contributed the most to Wiess College as determined by a student committee.",
      resume: ""
    },{
      title: "Mike Gustin Innovation Award",
      organization: "Wiess Residential College - Rice University",
      date: "March 2012",
      summary: "Created a knowledge management system for Wiess College by developing an organizational system and sourcing content from dozens of people. Award is granted to one student annually.",
      resume: ""
    },{
      title: "Dr. Bill Wilson Student Initiative Grant",
      organization: "Wiess Residential College - Rice University",
      date: "December 2011",
      summary: "Utilized awarded funds to lead a team of 19 to plan and execute a new inter-organization event for over 600 attendees. Grant awarded through a proposal and selection process.",
      resume: ""
    }];

    $scope.experienceCategories = [
    "Professional Experiences",
    "University Experiences",
    "Classes"
    ];
    
    $scope.experiences = [
    {
      title: "Business Analyst",
      organization: "Accenture Management Consulting",
      start: "September 2013",
      end: "Present",
      summary: "As a Business Analyst in Accenture's Management Consulting practice, David collaborates with Accenture as well as client team members to define opportunities for improvement, generate alternatives, and implement solutions. He has worked across the Oil & Gas and Healthcare fields.",
      bullets: [
       "Developed a testing tracker to increase visibility into testing progress and ensure coverage of all scenarios for a large-scale systems integration",
       "Composed a market analysis report to identify opportunities and risks for Accenture",
       "Trained users and gathered feedback on system design from subject matter experts during multiple rounds of testing",
       "Developed a training plan to increase lagging training numbers and bring at-risk sites up to at least 80% trained",
       "Analyzed two months worth of help center tickets to identify trends and develop mitigation plans for common issues",
       "Tested Opportunity to Cash processes in Enterprise Resource Planning software package, logged defects, and validated resolutions",
       "Documented to-be process flow and requirements",
       "Designed structure for database of healthcare start-ups"],
      tags: "Training/Teaching Microsoft Excel Data Analysis Change Management Stakeholder Analysis",
      category: "Professional Experiences",
      resume: ""
    },{
      title: "Undergraduate Researcher",
      organization: "Rice University",
      start: "August 2011",
      end: "May 2013",
      summary: "As an Undergraduate Researcher, David worked across three Rice Psychology labs, conducted an independent honors thesis, and co-authored a published paper. Research primarily focused on human factors and Industrial/Organizational Psychology.",
      bullets: [
       "Developed and executed a research project exploring whether performance aids should be introduced after previous system exposure",
       "Collaborated with lead lab researcher to design a study on voting security and the usability of electronic voting systems",
       "Composed study materials and secured Institutional Review Board research protocol approval",
       "Proctored experimental sessions",
       "Utilized SPSS to analyze research data",
       "Acted as an expert rater",
       "Assisted in participant recruitment", 
       "Reviewed papers being prepped for publication"],
      tags: "SPSS Data Analysis Research Plan Design Usability Testing",
      category: "University Experiences",
      resume: ""
    },{
      title: "After-School Mentor",
      organization: "Fifth Ward Enrichment Program",
      start: "January 2013",
      end: "April 2013",
      summary: "David contributed to the Fifth Ward Enrichment Program's goal of empowering young minority men by serving as an after-school mentor.",
      bullets: ["Taught classes on expertise to program participants",
       "Assisted other mentors in facilitating classes",
       "Updated pre and post program surveys to increase the value of the information collected"],
      tags: "Teaching/Training Mentoring",
      category: "University Experiences",
      resume: ""
    },{
      title: "Director and Co-Founder",
      organization: "Rice University Splash",
      start: "September 2012",
      end: "April 2013",
      summary: "David spearheaded the creation of an annual day of classes for high-school students on diverse topics from Nano-engineering to the Psychology of Happiness. Introduced with assistance from nation-wide organization Learning Unlimited.",
      bullets: ["Secured grant funding for program through a competitive proposal process",
       "Collaborated with 2 co-founders to help manage and develop program",
       "Recruited 15 undergraduate students to serve as instructors to 47 high school students"],
      tags: "Teaching/Training Project/Program Management Communication Planning and Delivery Stakeholder Analysis",
      category: "University Experiences",
      resume: ""
    },{
      title: "Student Taught Course Instructor",
      organization: "Rice University",
      start: "August 2011",
      end: "April 2013",
      summary: "Rice's Student Taught Course Program allows undergraduates to propose and teach 1-credit hour classes to fellow undergraduates. David taught two, Expertise and Introduction to Juggling in Fall 2011 and Expertise by Design in Spring 2013.",
      bullets: ["Developed syllabus and lesson plans based on extensive self-directed research",
       "Adjusted course content based on skills, interests, and progress of students"],
      tags: "Teaching/Training",
      category: "University Experiences",
      resume: ""
    },{
      title: "Residential College President",
      organization: "Rice University",
      start: "February 2012",
      end: "February 2013",
      summary: "As President of one of the 11 Residential Colleges at Rice, David led the College’s student government and supervised the planning and execution of all College functions and activities. He served as a mentor to the other representatives of the College and also helped to develop and execute new initiatives at both the College and University level.",
      bullets: ["Elected by the college’s 330+ student residents to oversee the college government",
       "Led and mentored 21 members of the college government",
       "Communicated with university administration and students to analyze issues and implement solutions",
       "Collaborated with a committee to develop and disseminate the Rice Student Vision for the Second Century",
       "Oversaw the use of the college’s annual budget of over $50,000",
       "Initiated a new financial accountability system and set priorities to eliminate a $6,000 debt and pass on a $10,000 surplus",
       "Restructured the college government to increase productivity and accountability",
       "Initiated and directed an $8,000 renovation of the college’s private dining room and one kitchenette"],
       tags: "Project/Program Management Strategic Planning Mentoring Stakeholder Analysis Communication Planning and Delivery",
       category: "University Experiences",
      resume: ""
    },{
      title: "Experience Design Researcher",
      organization: "Hewlett-Packard",
      start: "October 2012",
      end: "May 2013",
      summary: "Designed and executed usability studies on Hewlett-Packard and competitor products to guide product design.",
      bullets: ["Collaborated with other research team members as well as industrial designers to identify opportunities for product improvement",
      "Utilized both qualitative and quantitative methods to gather data from study participants",
      "Presented study findings and recommendations to product stakeholders",
      "Assisted the development of design guidelines based on aggregated testing data and published standards"],
      tags: "Usability Testing Data Analysis Research Plan Design Stakeholder Analysis",
      category: "Professional Experiences",
      resume: ""
    },{
      title: "Program Coordinator",
      organization: "Volunteer Houston",
      start: "June 2012",
      end: "July 2012",
      summary: "Oversaw a program of 60 college-level summer internships at non-profits across Houston under the supervision of Volunteer Houston leadership. Principal responsibilities included ensuring the effective execution of program-wide events, managing and resolving issues, and interviewing agency leadership and interns to develop a final report and recommendations for the future.",
      bullets: ["Collaborated with ExxonMobil program sponsors and Volunteer Houston program leadership to direct the program",
       "Coordinated three days of service and two development seminars for program participants",
       "Conducted 41 evaluative site-visit interviews with the interns and supervisors",
       "Analyzed data from interns and supervisors to draft 22 program-wide recommendations for improvement",
       "Composed a 120-page evaluative report that was submitted to ExxonMobil’s Community Relations Advisor"],
      tags: "Project/Program Management Data Analysis Mentoring",
      category: "Professional Experiences",
      resume: ""
    },{
      title: "Secretary and Site Leader",
      organization: "Rice University Habitat for Humanity",
      start: "August 2010",
      end: "March 2012",
      summary: "As a site leader, David coordinated and managed Rice volunteers. In his second year in the chapter, David oversaw club communications as Secretary.",
      bullets: ["Coordinated club logistics",
       "Collaborated with the rest of the team of club officers to develop the club",
       "Managed build logistics and the work done by Rice volunteers on-site"],
      tags: "Communication Planning and Delivery Project/Program Management",
      category: "University Experiences",
      resume: ""
    },{
      title: "Programming in Python",
      organization: "Thinkful",
      start: "November 2013",
      end: "February 2014",
      summary: "3 month long course on the use of Python for web development. Involved completion of diverse assignments and weekly meetings with a professional developer who served as a mentor.",
      bullets: ["Utilized Python 2.7, Flask, and SQL as well as Git and Heroku",
      "Developed a program to search blocks of text for user-identified words",
      "Built a potluck planning app to allow users to solicit and track contributions from event attendees"],
      tags: "Python SQL Flask Git Heroku",
      category: "Classes",
      resume: ""
    },{
      title: "Artifical Intelligence for Robotics",
      organization: "Udacity",
      start: "September 2013",
      end: "November 2013",
      summary: "Course focused on the concepts and programming paradigms necessary to construct algorithmic robots.",
      bullets: ["Utilized Python 2.7",
      "Covered localization, filters (Kalman and Particle), search, PID Control, and SLAM",
      "Wrote a program for a warehouse robot on a grid tasked with collecting several packages"],
      tags: "Python",
      category: "Classes",
      resume: ""
    },{
      title: "Human-Computer Interaction",
      organization: "Rice University",
      start: "August 2011",
      end: "December 2011",
      summary: "Course focused on understanding the relationship between human and computers.",
      bullets: ["Researched and compared knowledge management systems on the basis of their usability",
      "Composed a research paper on the use of computers to augment learning"],
      tags: "Usability Testing Research Plan Design",
      category: "Classes",
      resume: ""
    },{
      title: "Introduction to Human Factors and Ergonomics",
      organization: "Rice University",
      start: "August 2011",
      end: "December 2011",
      summary: "Covered the basic principles of human-object interactions and how human performance can be optimized.",
      bullets: ["Collaborated with two other students to design a wrist-watch using design specifications based on available research"],
      tags: "Usability Testing Research Plan Design",
      category: "Classes",
      resume: ""
    },{
      title: "Technical Team Member",
      organization: "Engineers Without Borders",
      start: "August 2010",
      end: "August 2010",
      summary: "Collaborated with a 10-person team to survey a road for improvement in La Prusia, Nicaragua and develop a report for the national chapter.",
      bullets: [
      "Conducted stakeholder analysis to understand issues",
      "Partnered with local officials, contractors, and the populace to develop a viable solution"],
      tags: "Stakeholder Analysis",
      category: "University Experiences",
      resume: ""
    }];

    $scope.display = function(skillLabel) {
      $scope.skillLabel = skillLabel;
    };
  }]);

//This controller is for the random experiments, tutorials, and tests I do
profileControllers.controller('PlaygroundCtrl', ['$scope', '$resource',
  function ($scope, $resource){

  // for searching the iTunes API
    $scope.searchItunes = function(searchTerm){
    console.log("Got hold of resource", $resource);
    console.log(searchTerm);
    var url = "https://itunes.apple.com/search"; 
    var SearchResult = $resource(url, {term:searchTerm, callback: 'JSON_CALLBACK'}, {get:{method:'JSONP'}});
    var result = SearchResult.get(function(){
        console.log("Got result", result);
        $scope.result = result;
    }); 
  }

  // for searching by multiple columns
       $scope.sortExpression = [];
    $scope.setSortExpression = function(expression){
        console.log(expression);        
        
        var indexOfExpression = $scope.sortExpression.indexOf(expression);
        var reversedExpression = "-" + expression;
        var indexOfReversedExpression = $scope.sortExpression.indexOf(reversedExpression);
        if ( indexOfExpression > -1) {
            $scope.sortExpression[indexOfExpression] = reversedExpression;
        }else if(indexOfReversedExpression > -1){
            console.log("need to remove expression", indexOfReversedExpression);
            $scope.sortExpression.splice(indexOfReversedExpression, 1);
        }else{
            $scope.sortExpression.push(expression);
        };
        
    }

// In-line editer
    $scope.editedItem = null;
    
    $scope.items = [{ name :"item #1", likes: 2, editing : false}, { name :"item #2", likes: 4, editing : false},
                    { name :"item #3", likes: 5, editing : false}];

    $scope.like = function(item) {
      item.likes++;
    }

    $scope.newItem = function(){ 
        $scope.items.push({name:"new record", likes: 0});
    
    }
    $scope.startEditing = function(item){
        item.editing=true;
        $scope.editedItem = item;
    }
        
    $scope.doneEditing = function(item){
        item.editing=false;
        $scope.editedItem = null;

    }
}]);