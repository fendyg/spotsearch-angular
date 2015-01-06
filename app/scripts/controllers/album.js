//Album Controller
//jshint ignore:start

'use strict';

angular.module('spotsearchAngularApp')
.controller('AlbumController',
    ['$scope', '$routeParams', 'searchFactory', 'uuidFactory', 'localStorageService',
    function($scope, $routeParams, searchFactory, uuid, localStorageService) {

        $scope.results = {};

        searchFactory.getAlbum($routeParams.albumId)
        .success(function(results){
            $scope.results = results;
            console.log(results);
        })
        .error(function(error) {
            $scope.status = 'Unable to load search results: ' + error.message;
        });

        $scope.playlists = [];
        $scope.selectedTrack = 0;

        for (var i = 0; i < localStorageService.keys().length; i++) {
            $scope.playlists.push({
                id: localStorageService.keys()[i],
                name: localStorageService.get(localStorageService.keys()[i]).name
            });
        }

        $scope.playTrack = function(url) {
            $scope.player.load({src:url});
            $scope.player.play();
        };

        $scope.addTrack = function(track, selectedPlaylist) {
            $scope.selectedTrack = track - 1;

            if(selectedPlaylist === 'newplaylist') {
                $('#name-new-playlist').modal();
            } else {
                var playlist = localStorageService.get(selectedPlaylist),
                    scopeResult = $scope.results,
                    selectedItem = scopeResult.tracks.items[$scope.selectedTrack],
                    trackToAdd = {
                        'name' : selectedItem.name,
                        'artist' : scopeResult.artists[0].name,
                        'album' : scopeResult.name,
                        'imageURL' : scopeResult.images[0].url,
                        'trackURL' : selectedItem.preview_url
                    };

                playlist.tracks.push(trackToAdd);
                localStorageService.set(selectedPlaylist, playlist);
                console.log(playlist);
            }
        };

        $scope.createPlaylist = function(newPlaylistName) {
            $('#name-new-playlist').modal('hide');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();

            var playlistKey = uuid(),
                scopeResult = $scope.results,
                selectedItem = scopeResult.tracks.items[$scope.selectedTrack];

            var trackToAdd = {
                'name' : newPlaylistName,
                'id' : playlistKey,
                'tracks': [{
                    'name' : selectedItem.name,
                    'artist' : scopeResult.artists[0].name,
                    'album' : scopeResult.name,
                    'imageURL' : scopeResult.images[0].url,
                    'trackURL' : selectedItem.preview_url
                }]
            };
            localStorageService.set(playlistKey, trackToAdd);
            console.log(trackToAdd);
        };
}]);