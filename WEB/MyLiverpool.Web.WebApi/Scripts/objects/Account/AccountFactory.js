'use strict';
angular.module('liverpoolApp')
    .factory('AccountFactory', [
        '$q', '$http', 'SessionService', function($q, $http, SessionService) {

            return {
                register: function(registerData) {
                    var result = $q.defer();

                    $http({
                            method: 'POST',
                            url: SessionService.apiUrl + '/api/Account/register',
                            data: registerData,
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
                login: function(credentials) {
                    var result = $q.defer();

                    var params = { grant_type: "password", userName: credentials.userName, password: credentials.password };

                    $http({
                            method: 'POST',
                            url: SessionService.apiUrl + '/token',
                            transformRequest: function(obj) {
                                var str = [];
                                for (var p in obj)
                                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                return str.join("&");
                            },
                            data: params,
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;' }
                        })
                        .success(function(response) {
                            result.resolve(response);
                        })
                        .error(function(response) {
                            result.reject(response);
                        });

                    return result.promise;
                },
                isEmailUnique: function(email) {
                    var result = $q.defer();

                    $http({
                            method: 'POST',
                            url: SessionService.apiUrl + '/api/Account/IsEmailUnique?email=' + email,
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
                isUserNameUnique: function(userName) {
                    var result = $q.defer();

                    $http({
                            method: 'POST',
                            url: SessionService.apiUrl + '/api/Account/IsUserNameUnique?userName=' + userName,
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
                checkIfUserLoggedIn: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/Account/IsLogined',
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
                resendConfirmEmail: function(email) {
                    var result = $q.defer();

                    $http({
                            method: 'Post',
                            url: SessionService.apiUrl + '/api/account/resendConfirmEmail?email=' + email,
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
                forgotPassword: function(email) {
                    var result = $q.defer();

                    $http({
                            method: 'Post',
                            url: SessionService.apiUrl + '/api/account/forgotPassword?email=' + email,
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
                resetPassword: function(resetForm) {
                    var result = $q.defer();

                    $http({
                            method: 'Post',
                            url: SessionService.apiUrl + '/api/account/resetPassword',
                            data: resetForm,
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
                changePassword: function(changeForm) {
                    var result = $q.defer();

                    $http({
                            method: 'Post',
                            url: SessionService.apiUrl + '/api/account/changePassword',
                            data: changeForm,
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

//AccountFactory.$inject = ['$q', '$http', 'SessionService']