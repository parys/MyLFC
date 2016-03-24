﻿'use strict';
angular.module('liverpoolApp')
    .factory('ForumFactory', [
        '$q', '$http', 'SessionService', '$stateParams',
        function($q, $http, SessionService, $stateParams) {

            return {
                getSections: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Forum',
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
                getSubsection: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Forum/subsection?id=' + $stateParams.id + '&page=' + $stateParams.page,
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
                getTheme: function(id, page) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Forum/theme?id=' + id + '&page=' + page,
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

//ForumFactory.$inject = ['$q', '$http', 'SessionService', '$stateParams']