'use strict';

angular.module('angOrderApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'UserApp'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/order', {
        templateUrl: 'views/order.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'MainCtrl',
        public: true,
        login: true
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'MainCtrl',
        public: true
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, user) {
    user.init({ appId: '531e6fbec3492' });
  });
