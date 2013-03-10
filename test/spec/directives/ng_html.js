'use strict';

describe('Directive: ngHtml', function () {
  beforeEach(module('vkApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<ng-html></ng-html>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the ngHtml directive');
  }));
});
