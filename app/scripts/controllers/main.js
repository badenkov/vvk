'use strict';

angular.module('vkApp')
  .controller('MainCtrl', function ($scope, vkontakte) {
    vkontakte.getWall().then(function(m) {
      $scope.wall = m;
    });

    $scope.logout = function() {
      vkontakte.logout(function(response) {
        console.log(response);
      });
    };

  });

