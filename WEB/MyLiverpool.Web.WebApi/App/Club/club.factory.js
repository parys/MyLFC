'use strict';
angular.module('club.factory', [])
    .factory('ClubFactory', [
        '$q', '$http', 'SessionService',
        function ($q, $http, SessionService) {
            var controllerUrl = SessionService.apiUrl + '/api/club';
            return {
                get: function (id) {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: controllerUrl + '?id=' + id,
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
                getList: function () {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: controllerUrl + '/list',
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
                create: function (model) {
                    var result = $q.defer();
                    $http({
                        method: 'POST',
                        url: controllerUrl,
                        data: model,
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
                edit: function (model) {
                    var result = $q.defer();
                    $http({
                        method: 'PUT',
                        url: controllerUrl,
                        data: model,
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
                        url: controllerUrl + '?id=' + id,
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
                getClubs: function (typed) {
                    var result = $q.defer();
                    $http({
                        method: 'GET',
                        url: controllerUrl + '/getClubsByName?typed=' + typed,
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