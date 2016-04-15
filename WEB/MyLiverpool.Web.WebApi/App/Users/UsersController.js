'use strict';
angular.module('users.ctrl')
    .controller('UsersController', [
        '$stateParams', '$state', 'UsersFactory', 'RoleGroupsFactory',
        function ($stateParams, $state, UsersFactory, RoleGroupsFactory) {
            var vm = this;
            vm.users = [];
            vm.pageNo = undefined;
            vm.totalItems = undefined;
            vm.itemPerPage = undefined;
            vm.userRole = undefined;
            vm.roleGroups = undefined;

            vm.chosenRoleGroupId = undefined;

            vm.init = function () {
                var page = $stateParams.page;
                UsersFactory.getUsers(page)
                    .then(function(response) {
                        vm.users = response.list;
                        vm.pageNo = response.pageNo;
                        vm.totalItems = response.totalItems;
                        vm.itemPerPage = response.itemPerPage;
                        },
                        function(response) {
                        });
                RoleGroupsFactory.get()
                    .then(function (response) {
                        vm.roleGroups = response;
                    },
                        function (response) {
                        });
            };

            vm.isNotSelf = function(userId, userId2) {
                return userId != userId2;
            }

            vm.goToPage = function() {
                $state.go('users', { page: vm.pageNo });
            }

            
        }
    ]);