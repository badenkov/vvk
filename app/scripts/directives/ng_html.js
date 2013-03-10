'use strict';

angular.module('vkApp')
  .directive('ngHtml', function () {
    return function(scope, element, attrs) {
      scope.$watch(attrs.ngHtml, function(value) {
        element[0].innerHTML = value;
      });
    }
  });
