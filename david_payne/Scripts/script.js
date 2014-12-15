// Creates the main module and injects dependecies

var profile = angular.module('profile', ['profileControllers']);

// Sets up the routes and links in the controllers
profile.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/profile.html',
        controller: 'ButtonsCtrl'
      }).
      when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeCtrl'
      }).
      when('/playground', {
        templateUrl: 'partials/playground.html',
        controller: 'PlaygroundCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);