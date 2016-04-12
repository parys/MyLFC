'use strict';
angular.module('forum.factory', [])
    .factory('ForumFactory', [
        '$q', '$http', 'SessionService', '$stateParams',
        function($q, $http, SessionService, $stateParams) {

            return {
                getForum: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/forumSection',
                            headers: { 'Content-Type': 'application/json' }
                        })
                        .success(function(response) {
                            result.resolve(response);
                        })
                        .error(function(response) {
                            result.reject(response);
                        });

                    return result.promise;;
                },
                getSections: function() {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: SessionService.apiUrl + '/api/forumSection/list',
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;;
                },
                getSection: function (id) {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: SessionService.apiUrl + '/api/forumSection?id=' + id,
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .success(function (response) {
                            result.resolve(response);
                        })
                        .error(function (response) {
                            result.reject(response);
                        });

                    return result.promise;;
                },
                getSubsection: function() {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/ForumSubsection?id=' + $stateParams.id + '&page=' + $stateParams.page,
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
                createSubsection: function(data) {
                    var result = $q.defer();

                    $http({
                        method: 'POST',
                        url: SessionService.apiUrl + '/api/ForumSubsection',
                        data : data,
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
                updateSubsection: function (data) {
                    var result = $q.defer();

                    $http({
                        method: 'PUT',
                        url: SessionService.apiUrl + '/api/ForumSubsection',
                        data : data,
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

                getTheme: function(id, page) {
                    var result = $q.defer();

                    $http({
                            method: 'GET',
                            url: SessionService.apiUrl + '/api/ForumTheme?id=' + id + '&page=' + page,
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
                createSection: function(name) {
                    var result = $q.defer();

                    $http({
                            method: 'POST',
                            url: SessionService.apiUrl + '/api/forumSection?name=' + name,
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
                deleteSection: function(id) {
                    var result = $q.defer();

                    $http({
                            method: 'DELETE',
                            url: SessionService.apiUrl + '/api/forumSection/?id=' + id,
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