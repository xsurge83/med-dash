(function (angular) {
  "use strict";

  function headerCarouselDirective() {
    return {
      restrict: 'AE',
      replace: true,
      templateUrl: 'views/headerCarousel/header-carousel.html',
      scope: {
        header: '@',
        images: '='
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  }

  angular.module('infrasonicApp')
    .directive('headerCarousel', headerCarouselDirective);
})(angular);