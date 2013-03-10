'use strict';

angular.module('vkApp')
  .controller('AlbumsCtrl', function ($scope, $routeParams, vkontakte) {
    vkontakte.getAlbums($routeParams['user_id']).then(function(albums) {
      $scope.albums = albums;
    });

    vkontakte.getFriends().then(function(friends) {
      $scope.friends = friends;
    });
  });
