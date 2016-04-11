'use strict';
angular.module('users.ctrl')
    .controller('UsersController', [
        '$stateParams', '$state', 'UsersFactory',
        function($stateParams, $state, UsersFactory) {
            var vm = this;
            vm.users = [];
            vm.pageNo = 1;
            vm.countPage = 1;
            var init = function(page) {
                UsersFactory.getUsers(page)
                    .then(function(response) {
                        vm.users = response.list;
                        vm.pageNo = response.pageNo;
                        vm.countPage = response.CountPage;
                        },
                        function(response) {
                        });
            };

            vm.isNotSelf = function(userId, userId2) {
                return userId != userId2;
            }

            vm.goToPage = function() {
                $state.go('users', { page: vm.pageNo });
            }

            init($stateParams.page);
        }
    ]);