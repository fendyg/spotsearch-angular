//Playlist controller

//search controller

'use strict';

angular.module('spotsearchAngularApp')
.controller('PlaylistController',
    ['$scope', '$location', '$routeParams', 'localStorageService',
    function($scope, $location, $routeParams, localStorageService) {
        $scope.playlistId = $routeParams.playlistId;
        $scope.activePlaylist = null;
        $scope.playlists = [];
        $scope.playingTrack = 0;

        for (var i = 0; i < localStorageService.keys().length; i++) {
            $scope.playlists.push({
                id: localStorageService.keys()[i],
                name: localStorageService.get(localStorageService.keys()[i]).name
            });
        }

        $scope.viewPlaylist = function() {
            $scope.activePlaylist = localStorageService.get($scope.playlistId);
            console.log($scope.activePlaylist);
        };

        $scope.changePlaylist = function() {
            $location.path('/playlists/' + $scope.playlistId);
        };

        $scope.deletePlaylist = function() {
            localStorageService.remove($scope.playlistId);
            $location.path('/playlists');
        };

        $scope.deleteTrack = function(track) {
            $scope.activePlaylist.tracks.splice(track, 1);
            localStorageService.set($scope.playlistId, $scope.activePlaylist);
        };

        if(typeof $scope.playlistId === 'undefined') {
            console.log('no playlist');
        } else {
            $scope.viewPlaylist();
        }
}]);
