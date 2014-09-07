'use strict';

/**
 * @ngdoc function
 * @name infrasonicApp.controller:ProductsCtrl
 * @description
 * # ProductsCtrl
 * Controller of the infrasonicApp
 */
angular.module('infrasonicApp')
  .controller('ProductsCtrl', ['$scope', function ($scope) {
    $scope.images = [
      {
        path: 'images/carousel/product/image1.jpg'
      },
      {
        path: 'images/carousel/product/image2.jpg'
      },
      {
        path: 'images/carousel/product/image3.jpg'
      }
    ];
  }]);
