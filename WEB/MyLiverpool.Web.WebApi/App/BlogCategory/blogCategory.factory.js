﻿'use strict';
angular.module('blogCategory.factory', [])
    .factory('BlogCategoryFactory', [
        '$q', '$http', 'SessionService',
        function ($q, $http, SessionService) {
            return {
                getList: function () {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: SessionService.apiUrl + '/api/BlogCategory/',
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
                get: function (id) {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: SessionService.apiUrl + '/api/BlogCategory/?id=' + id,
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
                create: function (category) {
                    var result = $q.defer();

                    $http({
                        method: 'POST',
                        url: SessionService.apiUrl + '/api/BlogCategory/',
                        data: category,
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
                edit: function (id, category) {
                    var result = $q.defer();

                    $http({
                        method: 'PUT',
                        url: SessionService.apiUrl + '/api/BlogCategory/?id=' + id,
                        data: category,
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
                        url: SessionService.apiUrl + '/api/BlogCategory/?id=' + id,
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
            }
        }
    ]);