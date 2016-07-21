'use strict';
angular.module('liverpoolApp')
    .factory('Authentication', [
        '$q', 'AccountFactory', 'SessionService', '$cookies', '$rootScope', '$state',
        function($q, AccountFactory, SessionService, $cookies, $rootScope, $state) {

            var authenticatedUser = undefined;
            var cookieName = 'abra-kadabra';

            function isUserInRole(user, roleName) {
                if (!user) return false;
                return user.roles.indexOf(roleName) >= 0;
            };

            return {
                requestUser: function() {
                    if ($cookies.getObject('user')) {
                        AccountFactory.checkIfUserLoggedIn().
                            then(function(response) {
                                //  console.log('logged at server');
                                authenticatedUser = $cookies.getObject('user');
                                $rootScope.roles = authenticatedUser.roles; //todo temporary
                                $rootScope.userImage = authenticatedUser.userImage;
                            }, function(response) {
                                //   console.log('NOT logged at server');
                                authenticatedUser = undefined;
                                $cookies.remove('user');
                            });
                    } else {
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

                login: function(credentials) {
                    AccountFactory.login(credentials).
                        then(function(response) {
                            //  console.log(response);
                            authenticatedUser = response;
                            $rootScope.roles = authenticatedUser.roles; //todo temporary
                            $rootScope.userImage = authenticatedUser.userImage;
                            $cookies.putObject('user', authenticatedUser);
                            return true;
                        }, function(response) {
                            if (response.error == "invalid_grant") {
                                console.log("invalid_grant");
                                credentials.errorMessage = response.error_description;
                            } else {
                                if (response.error == "not_confirmed") {
                                    console.log("not_confirmed");
                                    $state.go('unconfirmed');
                                }
                            }
                            //   console.log('non authorized  AccountFactory.login' + response);
                            authenticatedUser = undefined;
                        });
                },

                logout: function() {
                    authenticatedUser = undefined;
                    $cookies.remove('user'); //todo from server
                    $rootScope.roles = ""; //todo temporary
                    $rootScope.userImage = ""; //todo temporary
                    $state.go('home');
                },

                getUserId: function() {
                    if (!authenticatedUser) return 0;
                    return parseInt(authenticatedUser.id);
                },

                //getUserName: function() {
                //    if (!authenticatedUser) return undefined;
                //    return authenticatedUser.
                //}

                isAdmin: function() {
                    return isUserInRole(authenticatedUser, 'AdminFull');
                },

                isAdminAssistant: function() {
                    return isUserInRole(authenticatedUser, 'AdminStart');
                },

                isMainModerator: function() {
                    return isUserInRole(authenticatedUser, 'UsersFull');
                },

                isModerator: function() {
                    return isUserInRole(authenticatedUser, 'UsersStart');
                },

                isNewsmaker: function() {
                    return isUserInRole(authenticatedUser, 'NewsStart');
                },

                isEditor: function() {
                    return isUserInRole(authenticatedUser, 'NewsFull');
                },

                isAuthor: function() {
                    return isUserInRole(authenticatedUser, 'BlogStart');
                },
            }
        }
    ]);