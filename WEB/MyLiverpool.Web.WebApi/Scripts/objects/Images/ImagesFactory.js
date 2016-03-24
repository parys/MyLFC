'use strict';
angular.module('liverpoolApp')
    .factory('ImagesFactory', [
        '$q', '$http', 'SessionService',
        function($q, $http, SessionService) {
            return {
                getImages: function(path) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Images?path=' + path,
                            headers: { 'Content-Type': 'application/json' }
                        })
                        .success(function(response) {
                            result.resolve(response);
                        })
                        .error(function(response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
            }
        }
    ]);

//ImagesFactory.$inject = ['$q', '$http', 'SessionService']