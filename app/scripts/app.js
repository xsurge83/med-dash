'use strict';

/**
 * @ngdoc overview
 * @name infrasonicApp
 * @description
 * # infrasonicApp
 *
 * Main module of the application.
 */
angular
  .module('infrasonicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/products', {
        templateUrl : 'views/products.html',
        controller : 'ProductsCtrl'
      })
      .when('/services', {
        templateUrl : 'views/services.html'
      })
      .when('/training', {
        templateUrl : 'views/training.html'
      })
      .when('/homecare', {
        templateUrl : 'views/homecare.html'
      })
      .when('/faq', {
        templateUrl : 'views/faq.html'
      })
      .when('/investors', {
        templateUrl : 'views/investors.html'
      })
      .when('/partners', {
        templateUrl : 'views/partners.html'
      })

      .when('/investors', {
        templateUrl : 'views/investors.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
