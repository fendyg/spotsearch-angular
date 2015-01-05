'use strict';

/**
 * @ngdoc overview
 * @name spotsearchAngularApp
 * @description
 * # spotsearchAngularApp
 *
 * Main module of the application.
 */
angular
  .module('spotsearchAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
      })
      .when('/about', {
      })
      .otherwise({
        redirectTo: '/'
      });
  });
