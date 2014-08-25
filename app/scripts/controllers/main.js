'use strict';

/**
 * @ngdoc function
 * @name infrasonicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the infrasonicApp
 */
angular.module('infrasonicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.images = [
      {
        path: 'images/carousel/home/image1.png'
      },
      {
        path: 'images/carousel/home/image2.jpg'
      },
      {
        path: 'images/carousel/home/image3.jpg'
      }
    ];
  });
