﻿var SessionService = function ($cookies) {
    this.token = undefined;
    this.userId = undefined;

    this.getToken = function () {
    //    if (!$cookies.awesomeAngularWebAppToken) {
    //        if (!this.token) {
                return undefined;
    //        }
    //        this.setToken(this.token);
        }
    //    return $cookies.awesomeAngularWebAppToken;
    //}

    //this.setToken = function (token) {
    //    this.token = token;
    //    $cookies.awesomeAngularWebAppToken = token;
    //}

    //this.remove = function() {
    //    $cookies.remove("awesomeAngularWebAppToken");
    //}

    //this.setUserId = function(userId) {
    //    this.userId = userId;
    //}

    //this.getUserId = function() {
    //    return this.userId;
    //}


    this.apiUrl = 'http://localhost:46940';//todo
   // this.apiUrl = 'http://lfc.somee.com';//todo
}

SessionService.$inject = ['$cookies'];