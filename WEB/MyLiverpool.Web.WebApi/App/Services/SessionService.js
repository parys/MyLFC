'use strict';
var app = angular.module('liverpoolApp');
app.service('SessionService', [
    '$cookies',
    function($cookies) {
        this.token = undefined;
        this.userId = undefined;

        //  this.getToken = function () {
        //    if (!$cookies.awesomeAngularWebAppToken) {
        //        if (!this.token) {
        //             return this.token;
        //        }
        //        this.setToken(this.token);
        //  }
        //  return $cookies.awesomeAngularWebAppToken;


        this.getToken = function() {
            var cookie = $cookies.getObject('user');
            if (!cookie) return undefined;
            return cookie.access_token;
        }

        //  this.setToken = function (token) {
        //      this.token = token;
        //  $cookies.awesomeAngularWebAppToken = token;
        //  }

        //this.remove = function() {
        //    $cookies.remove("awesomeAngularWebAppToken");
        //}

        //this.setUserId = function(userId) {
        //    this.userId = userId;
        //}

        //this.getUserId = function() {
        //    return this.userId;
        //}


        this.apiUrl = 'http://localhost:46940'; //todo
        // this.apiUrl = 'http://lfc.somee.com';//todo
    }
]);