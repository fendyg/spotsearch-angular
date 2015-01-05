//Artist search controller

'use strict';

angular.module('spotsearchAngularApp')
.controller('ArtistSearchController',
    ['$scope', '$routeParams', 'searchFactory',
    function($scope, $routeParams, searchFactory) {

        $scope.types = 'artist';
        $scope.query = $routeParams.query;
        $scope.results = {};

        searchFactory.getSearchResults($routeParams.query, 'artist')
        .success(function(results){
            $scope.results = results;
            console.log(results);
        })
        .error(function(error) {
            $scope.status = 'Unable to load search results: ' + error.message;
        });
}]);