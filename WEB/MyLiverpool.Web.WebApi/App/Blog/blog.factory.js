'use strict';
angular.module('blog.factory', [])
    .factory('BlogFactory', [
        '$q', '$http', 'SessionService', '$stateParams',
        function ($q, $http, SessionService, $stateParams) {
            return {
                getList: function (page, categoryId, authorUserName) {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: SessionService.apiUrl + '/api/Blog/?page=' + page + '&categoryId=' + categoryId + '&authorUserName=' + authorUserName,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
                getItem: function () {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: SessionService.apiUrl + '/api/Blog/?id=' + $stateParams.id,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
                delete: function (id) {
                    var result = $q.defer();

                    $http({
                        method: 'DELETE',
                        url: SessionService.apiUrl + '/api/Blog/?id=' + id,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
                activate: function (id) {
                    var result = $q.defer();

                    $http({
                        method: 'PUT',
                        url: SessionService.apiUrl + '/api/Blog/activate?id=' + id,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
                getCategories: function () {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: SessionService.apiUrl + '/api/BlogCategory',
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
                create: function (item) {
                    var result = $q.defer();

                    $http({
                        method: 'POST',
                        url: SessionService.apiUrl + '/api/Blog/',
                        data: item,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
                edit: function (item) {
                    var result = $q.defer();

                    $http({
                        method: 'PUT',
                        url: SessionService.apiUrl + '/api/Blog/',
                        data: item,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
                addView: function (id) {
                    var result = $q.defer();

                    $http({
                        method: 'PUT',
                        url: SessionService.apiUrl + '/api/Blog/addView?id=' + id,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;
                }
            };
        }
    ]);