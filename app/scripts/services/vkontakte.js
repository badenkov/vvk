'use strict';

angular.module('vkApp')
  .factory('vkontakte', function ($document, $window, $q) {
    // Service logic
    // ...


    var mid = null;
    function authenticate()
    {
      var deferred = $q.defer(); 

      $window.vkAsyncInit = function() {
        VK.init({
          apiId: "3419980",
        });
        VK.Auth.getLoginStatus(function(response){
          if (response.session) {
            var mid = response.session.mid;
            deffered.resolve(mid);
          } else {
            VK.Auth.login(function(response) {
              console.log(response);
            });
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

      return deferred;
    };

    // Public API here
    return {
      mid: function() {
        return authenticate().then(function(mid) {
          return mid;
        });
      },
      logout: function(callback) {
        VK.Auth.logout(callback);
      }
    };
  });
