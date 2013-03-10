'use strict';

describe('Controller: AlbumsCtrl', function () {

  // load the controller's module
  beforeEach(module('vkApp'));

  var AlbumsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    AlbumsCtrl = $controller('AlbumsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
