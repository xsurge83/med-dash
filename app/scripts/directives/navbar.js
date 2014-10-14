(function () {
  'use strict';
  function NavBarCtrl($scope, $rootScope, $location) {
    var _navLinks = $scope.navLinks = [];

    function _matchWithPath(linkUrl, curPath){
      var url = linkUrl.replace('#', ''),
        linkRegExp = new RegExp(url+'\\b', 'i');
      return curPath.match(linkRegExp);
    }

    function _resetNavLinks(){
      angular.forEach(_navLinks, function (link) {
        link.selected = false;
      });
    }

    $rootScope.$on('$routeChangeStart', function routeChange() {
      var path = $location.path();
      var matchedLink = _.find(_navLinks, function criteria(link) {
        return _matchWithPath(link.url, path);
      });
      if (matchedLink) {
        $scope.select(matchedLink);
      }
    });
    $scope.select = function (navLink) {
      _resetNavLinks();
      navLink.selected = true;
    };

    this.add = function (navLink) {
      if(_matchWithPath(navLink.url, $location.path())){
        _resetNavLinks();
        navLink.selected = true;
      }
      _navLinks.push(navLink);
    };
  }
  NavBarCtrl.$inject = ['$scope', '$rootScope', '$location'];


  function navBarDirective() {
    return {
      restrict: 'AE',
      replace: true,
      transclude: true,
      templateUrl: 'views/directives/navBar/nav-bar.html',
      controller: NavBarCtrl
    };
  }

  function navLinkDirective() {
    return {
      restrict: 'AE',
      replace: true,
      require: '^navBar',
      transclude: true,
      templateUrl: 'views/directives/navBar/nav-link.html',
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


