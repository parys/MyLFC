'use strict';
angular.module('liverpoolApp')
    .factory('NewsFactory', [
        '$q', '$http', 'SessionService', '$stateParams', function($q, $http, SessionService, $stateParams) {
            return {
                getList: function(page, categoryId) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/News/List?page=' + page + '&categoryId=' + categoryId,
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
                getItem: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/News/Info?id=' + $stateParams.id,
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
                            url: SessionService.apiUrl + '/api/News/delete?id=' + id,
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
                activate: function(id) {
                    var result = $q.defer();

                    $http({
                            method: 'PUT',
                            url: SessionService.apiUrl + '/api/News/activate?id=' + id,
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
                getCategories: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/News/categories',
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
                create: function(item) {
                    var result = $q.defer();

                    $http({
                            method: 'POST',
                            url: SessionService.apiUrl + '/api/News/create',
                            data: item,
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
                edit: function(item) {
                    var result = $q.defer();

                    $http({
                            method: 'PUT',
                            url: SessionService.apiUrl + '/api/News/edit',
                            data: item,
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
                addView: function(id) {
                    var result = $q.defer();

                    $http({
                            method: 'PUT',
                            url: SessionService.apiUrl + '/api/News/addView?id=' + id,
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

//NewsFactory.$inject = ['$q', '$http', 'SessionService', '$stateParams']