'use strict';

angular.module('vkApp')
  .factory('vkontakte', function ($document, $window, $rootScope, $q) {
    // Service logic
    // ...

    var authenticate = function() {

      if (!authenticate.deferred) {
        var deferred = $q.defer();

        $window.vkAsyncInit = function() {
          VK.init({
            apiId: "3419980",
          });
          VK.Auth.getLoginStatus(function(response){
            if (response.session) {
              var mid = response.session.mid;
              $rootScope.$apply(function() {
                deferred.resolve(mid);
              });
            } else {
              VK.Auth.login(function(response) {
                console.log(response);
              }, 2 + 4 + 8 + 16);
            }
          });
        };

        var vk_transport = $document[0].createElement('div');
        vk_transport.id = "vk_api_transport";
        var vk = $document.find('body').append(vk_transport);

        setTimeout(function() {
          var el = $document[0].createElement('script');
          el.type = "text/javascript";
          el.src = "http://vkontakte.ru/js/api/openapi.js";
          el.async = true;
          vk_transport.appendChild(el);
        }, 0);

        authenticate.deferred = deferred;
      }

      return authenticate.deferred.promise;
    };

    // Public API here
    return {
      getMid: function() {
        return authenticate().then(function(mid) {
          return mid;
        });
      },
      getUser: function() {
        return authenticate().then(function(mid) {
          var d = $q.defer();

          VK.Api.call('users.get', {
            uids: mid,
            fields: 'first_name, last_name, photo, photo_medium, photo_big'
          }, function(r) {
            if (r.response) {
              $rootScope.$apply(function() {
                d.resolve(r.response[0]);
              });
            }
          });
          
          return d.promise;
        });
      },
      getFriends: function(user_id) {
        return authenticate().then(function(mid) {
          var d = $q.defer();

          if (!user_id) {
            user_id = mid;
          }

          VK.Api.call('friends.get', {
            uid: user_id,
            fields: 'uid, first_name, last_name, photo'
          }, function(r) {
            console.log(r);
            if (r.response) {
              $rootScope.$apply(function() {
                d.resolve(r.response);
              });
            };
          });

          return d.promise;
        });
      },
      getAlbums: function(user_id) {
        return authenticate().then(function(mid) {
          var d = $q.defer();

          if (!user_id) {
            user_id = mid;
          }

          VK.Api.call('photos.getAlbums', {
            uid: user_id,
            need_covers: 1
          }, function(r) {
            console.log(r);
            if (r.response) {
              $rootScope.$apply(function() {
                d.resolve(r.response);
              });
            };
          });

          return d.promise;
        });
      },
      getPhotos: function(user_id, album_id) {
        return authenticate().then(function(mid) {
          var d = $q.defer();

          VK.Api.call('photos.get', {
            uid: user_id,
            aid: album_id
          }, function(r) {
            console.log(r);
            if (r.response) {
              $rootScope.$apply(function() {
                d.resolve(r.response);
              });
            };
          });

          return d.promise;
        });
      },
      getWall: function() {
        return authenticate().then(function(mid) {
          var d = $q.defer();

          VK.Api.call('wall.get', {
            owner_id: mid,
            extended: 0
          }, function(r) {
            if (r.response) {
              $rootScope.$apply(function() {
                r.response.shift();
                d.resolve(r.response);
              });
            }
          });

          return d.promise;
        });
      },
      logout: function() {
        return authenticate().then(function(mid) {
          var d = $q.defer();

          VK.Auth.logout(function(r) {
            console.log(r);
          });

          return d.promise;
        });
      },
      authenticated: function() {
        return atuhenticate();
      }
    };
  });
