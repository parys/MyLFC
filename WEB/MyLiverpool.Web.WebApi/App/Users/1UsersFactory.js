'use strict';
angular.module('liverpoolApp')
    .factory('UsersFactory', [
        '$q', '$http', 'SessionService', function($q, $http, SessionService) {

            return {
                getUsers: function(page) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/User/list?page=' + page,
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
                getUser: function(id) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/User/Info?id=' + id,
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
                editRole: function(userId, roleGroupId) {
                    var result = $q.defer();

                    $http({
                            method: 'PUT',
                            url: SessionService.apiUrl + '/api/User/EditRole?userId=' + userId + '&roleGroupId=' + roleGroupId,
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
                getUnreadPmCount: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/User/getUnreadPmCount',
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
                getUserNames: function(typed) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/User/getUserNames?typed=' + typed,
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
                banUser: function(userId, daysCount) {
                    var result = $q.defer();

                    $http({
                            method: 'PUT',
                            url: SessionService.apiUrl + '/api/User/banUser?userId=' + userId + '&daysCount=' + daysCount,
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
                unbanUser: function(userId) {
                    var result = $q.defer();

                    $http({
                            method: 'PUT',
                            url: SessionService.apiUrl + '/api/User/unbanUser?userId=' + userId,
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