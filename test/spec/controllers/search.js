'use strict';

describe('Controller: SearchController', function () {

  // load the controller's module
  beforeEach(module('spotsearchAngularApp'));

  var SearchController,
    scope,
    location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    location = $location;
    SearchController = $controller('SearchController', {
      $scope: scope
    });
  }));

  it('should initialize type to be album', function () {
    expect(scope.types).toBe('album');
  });

  describe('runSearch function test', function(){
    it('should update the URL with search query and type', function() {
      scope.searchQuery = 'green';
      scope.types = 'artist';
      scope.runSearch();
      expect(location.path()).toBe('/search/artist/green');
    });
  });
});
