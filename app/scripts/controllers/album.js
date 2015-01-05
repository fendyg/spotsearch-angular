//Album Controller

'use strict';

angular.module('spotsearchAngularApp')
.controller('AlbumController',
    ['$scope', '$routeParams', 'searchFactory',
    function($scope, $routeParams, searchFactory) {

        $scope.results = {};

        $scope.playTrack = function(url) {
            $scope.player.load({src:url});
            $scope.player.play();
        };

        searchFactory.getAlbum($routeParams.albumId)
        .success(function(results){
            $scope.results = results;
            console.log(results);
        })
        .error(function(error) {
            $scope.status = 'Unable to load search results: ' + error.message;
        });
}]);