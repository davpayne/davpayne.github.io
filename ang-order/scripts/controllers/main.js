'use strict';
var angOrderApp = angular.module('angOrderApp');

angOrderApp.controller('MainCtrl',['$scope', '$resource', '$firebase', '$firebaseSimpleLogin', function ($scope, $resource, $firebase, $firebaseSimpleLogin) {
    $scope.services = [
      {
        name:'Freeze Ray',
        active: false,
        price: 100
      },{
        name: 'Death Star',
        active: false,
        price: 4000
      },{
        name: 'Ray Gun',
        active: false,
        price: 500
      },{
        name: 'Shark with Laser on its Head',
        active: false,
        price: 900
      }
    ];
    var ref = new Firebase("https://<my-firebase>.firebaseio.com/");
      $scope.auth = $firebaseSimpleLogin(ref);

    $scope.toggleActive = function(service) {
        service.active = !service.active;
      };

    $scope.total = function() {
        var total = 0;

        angular.forEach($scope.services, function(service){
            if (service.active){
              total+= service.price;
            }
          });
        return total;
      };

    $scope.count = function() {
        var count = 0;

        angular.forEach($scope.services, function(service){
            if (service.active){
              count+= 1;
            }
          });
        return count;
      };

    $scope.selectAll = function() {
        if ($scope.count()!=4) {
        angular.forEach($scope.services, function(service){
            service.active = true;
      });
    } else {
        angular.forEach($scope.services, function(service){
            service.active = false;
      });
    }
    };
  }]);
