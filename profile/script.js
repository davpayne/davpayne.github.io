var profile = angular.module('profile', ['ui.bootstrap', 'ngRoute', 'profileControllers', 'ngAnimate']);

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
/*//Credit for ngBlur and ngFocus to https://github.com/addyosmani/todomvc/blob/master/architecture-examples/angularjs/js/directives/
profile.directive('ngBlur', function() {
  return function( scope, elem, attrs ) {
    elem.bind('blur', function() {
      scope.$apply(attrs.ngBlur);
    });
  };
});

profile.directive('ngFocus', function( $timeout ) {
  return function( scope, elem, attrs ) {
    scope.$watch(attrs.ngFocus, function( newval ) {
      if ( newval ) {
        $timeout(function() {
          elem[0].focus();
        }, 0, false);
      }
    });
  };
});*/
