'use strict';
angular.module('pm.factory', [])
    .factory('PmFactory', [
        '$q', '$http', 'SessionService',
        function($q, $http, SessionService) {

            return {
                getMessage: function(id) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Pm?id=' + id,
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
                getMessages: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Pm',
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
                sentMessage: function(model) {
                    var result = $q.defer();
                    $http({
                            method: 'POST',
                            url: SessionService.apiUrl + '/api/Pm',
                            data: model,
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

            }
        }
    ]);