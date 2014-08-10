'use strict';

/**
 * @ngdoc directive
 * @name infrasonicApp.directive:slick
 * @description
 * # slick
 */
angular.module('infrasonicApp')
  .directive('slick', function ($timeout) {
    return {
      restrict: 'AEC',
      link: function postLink(scope, element) {
        var $slider = $(element);
        $timeout(function(){
          $slider.slick({
            dots: true,
            speed: 500
          });
        });
      }
    };
  });
