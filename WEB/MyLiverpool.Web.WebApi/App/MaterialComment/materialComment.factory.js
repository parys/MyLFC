'use strict';
angular.module('materialComment.factory', [])
    .factory('MaterialCommentFactory', [
        '$q', '$http', 'SessionService',
        function ($q, $http, SessionService) {
            var controllerUrl = SessionService.apiUrl + '/api/materialComment/';
            return {
                //create: function (wish) {
                //    var result = $q.defer();

                //    $http({
                //        method: 'POST',
                //        url: SessionService.apiUrl + '/api/materialComment',
                //        data: wish,
                //        headers: { 'Content-Type': 'application/json' }
                //    })
                //        .success(function (response) {
                //            result.resolve(response);
                //        })
                //        .error(function (response) {
                //            result.reject(response);
                //        });
                //    return result.promise;
                //},
                //delete: function (id) {
                //    var result = $q.defer();

                //    $http({
                //        method: 'DELETE',
                //        url: SessionService.apiUrl + '/api/Wish?id=' + id,
                //        headers: { 'Content-Type': 'application/json' }
                //    })
                //        .success(function (response) {
                //            result.resolve(response);
                //        })
                //        .error(function (response) {
                //            result.reject(response);
                //        });
                //    return result.promise;
                //},
                getList: function (page, onlyUnverified) {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: controllerUrl + 'list?page=' + page + '&onlyUnverified=' + onlyUnverified,
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
                //get: function (id) {
                //    var result = $q.defer();

                //    $http({
                //        method: 'GET',
                //        url: SessionService.apiUrl + '/api/Wish?id=' + id,
                //        headers: { 'Content-Type': 'application/json' }
                //    })
                //        .success(function (response) {
                //            result.resolve(response);
                //        })
                //        .error(function (response) {
                //            result.reject(response);
                //        });
                //    return result.promise;
                //},
                //getTypes: function () {
                //    var result = $q.defer();

                //    $http({
                //        method: 'GET',
                //        url: SessionService.apiUrl + '/api/wish/types',
                //        headers: { 'Content-Type': 'application/json' }
                //    })
                //        .success(function (response) {
                //            result.resolve(response);
                //        })
                //        .error(function (response) {
                //            result.reject(response);
                //        });
                //    return result.promise;
                verify: function (id) {
                    var result = $q.defer();

                    $http({
                        method: 'GET',
                        url: controllerUrl + 'verify?id=' + id,
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