'use strict';

angular.module('vkApp')
  .controller('MenuCtrl', function ($scope, $location, vkontakte) {
    $scope.logout = function() {
      vkontakte.logout();
    };
    $scope.getItemClass = function(current_url) {
      if ($location.path() == current_url) {
        return 'active';
      }
    };
    $scope.items = [
      { label: "Главная", 
        url: '/'
      },
      { label: "Фотографии",
        url: '/photos'
      },
      { label: "Видео",
        url: '/video'
      }
    ];
    vkontakte.getUser().then(function(user){
      $scope.user = user;
    });
  });
