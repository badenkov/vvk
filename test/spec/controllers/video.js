'use strict';

describe('Controller: VideoCtrl', function () {

  // load the controller's module
  beforeEach(module('vkApp'));

  var VideoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    scope = {};
    VideoCtrl = $controller('VideoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
