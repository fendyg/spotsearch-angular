//search Factory

'use strict';

angular.module('spotsearchAngularApp')
.factory('searchFactory', ['$http', function($http) {
    var searchFactory = {};

    searchFactory.getSearchResults = function(searchInput, types) {
        return $http.get('https://api.spotify.com/v1/search?q=' +
            searchInput + '&type=' + types);
    };

    searchFactory.getAlbum = function(albumID) {
        return $http.get('https://api.spotify.com/v1/albums/' + albumID);
    };

    return searchFactory;
}]);
