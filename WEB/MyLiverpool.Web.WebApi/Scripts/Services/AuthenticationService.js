//'use strict';

//angular.module('App')
//  var  .service('Authentication', function Authentication($q, $http) {

var Authentication = function ($q, AccountFactory, SessionService, $cookies) {

    var authenticatedUser = undefined;
    var cookieName = 'abra-kadabra';

    //  var params = { grant_type: "password", userName: 'admin', password: '123456' }; //todo

    function isUserInRole(user, roleName) {
        if (!user) return false;
        return user.roles.indexOf(roleName) > 0;
    };

    return {
        requestUser: function() {
          //  console.log('requested user');
            if ($cookies.getObject('user')) {
                AccountFactory.checkIfUserLoggedIn().
                    then(function(response) {
                        console.log('logged at server');
                        authenticatedUser = $cookies.getObject('user');
                    }, function(response) {
                        console.log('NOT logged at server');
                        authenticatedUser = undefined;
                        $cookies.remove('user');
                    });
                //      console.log(authenticatedUser);
            }
            else {
                authenticatedUser = undefined;
            }
            return authenticatedUser;
        },

        getUser: function() {
            return authenticatedUser;
        },

        exists: function() {
            return authenticatedUser != undefined;
        },

        login: function (credentials) {
            AccountFactory.login(credentials).
                then(function (response) {
                    console.log(response);
                    authenticatedUser = response;
                    $cookies.putObject('user', authenticatedUser);
                    return true;
                }, function (response) {
                    credentials.errorMessage = 'Неправильный логин или пароль.';
                    console.log('non authorized  AccountFactory.login' + response);
                    authenticatedUser = undefined;
                });
        },

        logout: function() {
            authenticatedUser = undefined;
            $cookies.remove('user'); //todo from server
        },

        getUserId: function() {
            if (!authenticatedUser) return undefined;
            return authenticatedUser.id;
        },

        //getUserName: function() {
        //    if (!authenticatedUser) return undefined;
        //    return authenticatedUser.
        //}

        isAdmin: function() {
            return isUserInRole(authenticatedUser, 'AdminFull');
        },

        isModerator: function() {
            return isUserInRole(authenticatedUser, 'UsersStart');
        },

        isNewsmaker: function () {
            return isUserInRole(authenticatedUser, 'NewsStart');
        },

        isEditor: function() {
            return isUserInRole(authenticatedUser, 'NewsFull');
        },

        isAuthor: function() {
            return isUserInRole(authenticatedUser, 'BlogsStart');
        },

    }
};

Authentication.$inject = ['$q', 'AccountFactory', 'SessionService', '$cookies']