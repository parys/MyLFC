//'use strict';

//angular.module('App')
//  var  .service('Authentication', function Authentication($q, $http) {

var Authentication = function ($q, $http, LoginFactory, SessionService, $cookies) {

    var authenticatedUser = null;
    var cookieName = 'abra-kadabra';

      //  var params = { grant_type: "password", userName: 'admin', password: '123456' }; //todo

    return {
        requestUser: function() {
            console.log('requested user');
            if ($cookies.getObject('user')) {
                authenticatedUser = $cookies.getObject('user');
                console.log(authenticatedUser);
            }
            return authenticatedUser;
            //  return undefined; //todo get from cookie
            //LoginFactory('admin', '123456').
            //    then(function (response) {
            //        console.log(response);
            //        authenticatedUser = response;
            //    }, function (response) {
            //        $scope.loginForm.errorMessage = response.error_description;
            //    });
        },

        getUser: function() {
            return authenticatedUser;
        },

        exists: function() {
            return authenticatedUser != null;
        },

        login: function(credentials) {
            LoginFactory(credentials).
                then(function(response) {
                    authenticatedUser = response;
                    $cookies.putObject('user', authenticatedUser);
                }, function(response) {
                    authenticatedUser = undefined;
                });
        },

        logout: function() {
            authenticatedUser = null;
            $cookies.remove('user'); //todo from server
        },

        getToken: function () {
            if (!authenticatedUser) return undefined;
            console.log(authenticatedUser.access_token);
            return authenticatedUser.access_token;
        },

        getUserId: function() {
            if (!authenticatedUser) return undefined;
            return authenticatedUser.id;
        }

        }
};

Authentication.$inject = ['$q', '$http', 'LoginFactory', 'SessionService', '$cookies']