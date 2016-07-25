'use strict';
angular.module('wish.factory', [])
    .factory('WishFactory', [
        '$q', '$http', 'SessionService',
        function($q, $http, SessionService) {
            return {
                create: function(wish) {
                    var result = $q.defer();
                    
                    $http({
                            method: 'POST',
                            url: SessionService.apiUrl + '/api/Wish',
                            data: wish,
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
                delete: function(id) {
                    var result = $q.defer();

                    $http({
                            method: 'DELETE',
                            url: SessionService.apiUrl + '/api/Wish?id=' + id,
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
                getList: function (page, typeId, filterText) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Wish/list?page=' + page + '&typeId=' + typeId + '&filterText=' + filterText,
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
                get: function(id) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Wish?id=' + id,
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
                getTypes: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/wish/types',
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