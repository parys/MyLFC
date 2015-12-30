//'use strict';

//angular.module('App')
//  var  .service('Authentication', function Authentication($q, $http) {

var Authentication = function ($q, $http) {

        var authenticatedUser = null;

        return {
            requestUser: function() {
                var deferred = $q.defer();

                $http.get('/api/token')
                    .success(function (user) {
                        authenticatedUser = user;

                        deferred.resolve(user);
                    }).error(function(error) {
                        deferred.resolve(error);
                    });

                return deferred.promise;
            },

            getUser: function() {
                return authenticatedUser;
            },

            exists: function() {
                return authenticatedUser != null;
            },

            login: function (credentials) {
                var deferred = $q.defer();
                $http.post('/token', credentials)
                    .success(function(user) {

                        if (user) {
                            deferred.resolve(user);
                        } else {
                            deferred.reject('given credentials are incorrect');
                        }
                    })
                    .error(function(error) {

                    });
                return deferred.promise;
            },

            logout: function() {
                authenticatedUser = null;
            }
        }
};

Authentication.$inject = ['$q', '$http']