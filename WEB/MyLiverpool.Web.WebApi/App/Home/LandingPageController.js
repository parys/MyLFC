'use strict';
angular.module('liverpoolApp')
    .controller('LandingPageController',
    [
        '$state', 'Authentication', 'RouteFilter', 'AccountFactory', '$location', 'UsersFactory', '$interval',
        function($state, Authentication, RouteFilter, AccountFactory, $location, UsersFactory, $interval) {
            var vm = this;
            vm.unreadPmCount = 0;

            vm.userId = function() {
                return Authentication.getUserId();
            };

            vm.navbarProperties = {
                isCollapsed: true
            };

            function getUnreadPmCount() {
                if (!vm.loggedIn()) {
                    return;
                }
                UsersFactory.getUnreadPmCount().
                    then(function(response) {
                            if (response) {
                                vm.unreadPmCount = response;
                            }
                        },
                        function(response) {
                        });
            };

            $interval(getUnreadPmCount, 30000);

            vm.loggedIn = function() {
                return Authentication.exists();
            };

            vm.canAccess = function(route) {
                return RouteFilter.canAccess(route);
            }

            vm.logout = function() {
                Authentication.logout();
                //$state.go('home');
            }

            vm.emailUnique = function(email) {
                return AccountFactory.isEmailUnique(email);
            }

            vm.userNameUnique = function(userName) {
                return AccountFactory.isUserNameUnique(userName);
            }

            vm.getReturnUrl = function() {
                //  console.log($location.url());
                return $location.url();
            }
        }
    ]);