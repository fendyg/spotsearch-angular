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
    'ngTouch',
    'mediaPlayer'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search/artist/:query', {
        templateUrl: 'views/artistsearch.html',
        controller: 'ArtistSearchController'
      })
      .when('/search/album/:query', {
        templateUrl: 'views/albumsearch.html',
        controller: 'AlbumSearchController'
      })
      .when('/album/:albumId', {
        templateUrl: 'views/album.html',
        controller: 'AlbumController'
      })
      .when('/about', {
      })
      .otherwise({
        redirectTo: '/'
      });
  });
