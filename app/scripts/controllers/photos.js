'use strict';

angular.module('vkApp')
  .controller('PhotosCtrl', function ($scope, $routeParams, vkontakte) {

    if ($routeParams['album_id']) {
      vkontakte.getPhotos($routeParams['user_id'], $routeParams['album_id']).then(function(photos) {
        $scope.photos = photos;
        console.log(photos);
      });
    }

  });
