//search controller

'use strict';

angular.module('spotsearchAngularApp')
.controller('SearchController',
    ['$scope', '$location',
    function($scope, $location) {

        $scope.types = 'album';

        $scope.runSearch = function() {
            $location.path('/search/' + $scope.types + '/' + $scope.searchQuery);
        };
}]);
