'use strict';

angular.module('vkApp')
  .controller('MainCtrl', function ($scope, vkontakte) {
    $scope.logout = function() {
      vkontakte.logout(function(response) {
        console.log(response);
      });
    };
  });
