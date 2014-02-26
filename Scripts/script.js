var demoApp = angular.module('demoApp', []);


demoApp.config(function ($routeprovider) {
    $routeprovider
        .when('/view1',
        {
            controller: 'simpleController',
            templateUrl: 'Partials/View1.html'
        })
        .when('/view2',
        {
            controller: 'simpleController',
            templateUrl: 'Partials/View2.html'
        })
        .otherwise({ redirectTo: '/view1' })
});
/*var controllers = {};
controllers.simpleController = function($scope) {
 $scope.customers = [{name:'Dave', city:'Denver'}, {name:'Napur', city:'Houston'}, {name:'Heedy', city:'Denver'}, {name:'Shriva', city:'Los Angeles'}];
};
demoApp.controller(controllers)*/
demoApp.controller('simpleController', function($scope) {

                $scope.customers = [{name:'Dave', city:'Denver'},
                 {name:'Napur', city:'Houston'},
                  {name:'Heedy', city:'Denver'}, 
                  {name:'Shriva', city:'Los Angeles'}];

                $scope.addCustomer = function() {
                    $scope.customers.push({name: $scope.newCustomer.name, city: $scope.newCustomer.city})
                }
            });
