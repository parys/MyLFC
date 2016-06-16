'use strict';
angular.module('roleGroup.factory', [])
    .factory('RoleGroupFactory', [
        '$q', '$http', 'SessionService',
        function($q, $http, SessionService) {
            return {
                get: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/RoleGroup',
                            headers: { 'Content-Type': 'application/json' }
                        })
                        .success(function(response) {
                            result.resolve(response);
                        })
                        .error(function(response) {
                            result.reject(response);
                        });
                    return result.promise;
                }
            };
        }
    ]);