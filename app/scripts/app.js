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
    'mediaPlayer',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, localStorageServiceProvider) {

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
      .when('/playlists/', {
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistController'
      })
      .when('/playlists/:playlistId', {
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistController'
      })
      .when('/about', {
      })
      .otherwise({
        redirectTo: '/'
      });

    localStorageServiceProvider.setPrefix('spotsearch-playlist');
  });
