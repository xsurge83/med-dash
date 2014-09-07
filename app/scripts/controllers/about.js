'use strict';

/**
 * @ngdoc function
 * @name infrasonicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the infrasonicApp
 */
angular.module('infrasonicApp')
  .controller('AboutCtrl',['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
