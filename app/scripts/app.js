'use strict';

angular.module('vkApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl',
      })
      .when('/photos/:user_id/:album_id', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl'
      })
      .when('/photos/:user_id', {
        templateUrl: 'views/albums.html',
        controller: 'AlbumsCtrl'
      })
      .when('/photos', {
        templateUrl: 'views/albums.html',
        controller: 'AlbumsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

jQuery(function() {
  $(document).on('click', 'a.colorbox', function(event) {
    event.stopPropagation();
    event.preventDefault();

    var href = $(this).attr('href'),
        rel = $(this).attr('rel');

    $(this).closest('div').find('a[rel="'+rel+'"]').colorbox({
      open: false,
      rel: rel
    });

    $(this).colorbox({open: true});

  });
});
