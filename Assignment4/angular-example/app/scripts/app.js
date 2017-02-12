'use strict';

/**
 * @ngdoc overview
 * @name angularExampleApp
 * @description
 * # angularExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularExampleApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
