'use strict';
angular.module('pms.factory', [])
    .factory('PmsFactory', [
        '$q', '$http', 'SessionService',
        function($q, $http, SessionService) {

            return {
                getMessage: function(id) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/User/Pm?id=' + id,
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
                            url: SessionService.apiUrl + '/api/User/Pms', //?id='+ id,
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
                            url: SessionService.apiUrl + '/api/User/WritePm',
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