(function () {
  'use strict';
  function NavBarCtrl($scope, $rootScope, $location) {
    var _navLinks = $scope.navLinks = [];
    $rootScope.$on('$routeChangeStart', function routeChange() {
      var path = $location.path();
      var matchedLink = _.find(_navLinks, function criteria(link) {
        var url = link.url.replace('#', ''),
          linkRegExp = new RegExp(url, 'i');
        return path.match(linkRegExp);
      });
      if (matchedLink) {
        $scope.select(matchedLink);
      }
    });
    $scope.select = function (navLink) {
      angular.forEach(_navLinks, function (link) {
        link.selected = false;
      });
      navLink.selected = true;
    };

    this.add = function (navLink) {
      if (_navLinks.length === 0) {
        navLink.selected = true;
      }
      _navLinks.push(navLink);
    };
  }

  function navBarDirective() {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      templateUrl: 'views/navBar/nav-bar.html',
      controller: NavBarCtrl
    };
  }

  function navLinkDirective() {
    return {
      restrict: 'AE',
      replace: true,
      require: '^navBar',
      transclude: true,
      templateUrl: 'views/navBar/nav-link.html',
      scope: {
        name: '@',
        url: '@'
      },
      link: function postLink(scope, element, attrs, navBarCtrl) {
        navBarCtrl.add(scope);
      }
    };
  }

  /**
   * @ngdoc directive
   * @name infrasonicApp.directive:slick
   * @description
   * # slick
   */
  angular.module('infrasonicApp')
    .directive('navBar', navBarDirective)
    .directive('navLink', navLinkDirective);
})();


