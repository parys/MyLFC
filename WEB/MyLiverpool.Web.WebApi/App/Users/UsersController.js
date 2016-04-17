'use strict';
angular.module('users.ctrl')
    .controller('UsersController', [
        '$stateParams', '$state', 'UsersFactory', 'RoleGroupsFactory', '$filter',
        function ($stateParams, $state, UsersFactory, RoleGroupsFactory, $filter) {
            var vm = this;
            vm.users = [];
            vm.pageNo = undefined;
            vm.totalItems = undefined;
            vm.itemPerPage = undefined;
            vm.userRole = undefined;
            vm.roleGroups = undefined;

            vm.chosenRoleGroupId = undefined;

            vm.init = function () {
                UsersFactory.getUsers($stateParams.page, $stateParams.roleGroupId)
                    .then(function(response) {
                            vm.parseResponse(response);
                        },
                        function(response) {
                        });
                RoleGroupsFactory.get()
                    .then(function (response) {
                        vm.chosenRoleGroupId = $stateParams.roleGroupId;
                        vm.roleGroups = response;
                        vm.roleGroups.push({ name: 'Все группы', id: undefined });
                        
                        },
                        function (response) {
                        });
                
                
                vm.pageNo = $stateParams.page;
            };

            vm.isNotSelf = function(userId, userId2) {
                return userId != userId2;
            }

            vm.goToPage = function() {
                $state.go('users', { page: vm.pageNo, roleGroupId: vm.chosenRoleGroupId }, { reload: true });
            }

            vm.changeRoleId = function () {
                $stateParams.roleGroupId = vm.chosenRoleGroupId;
                $state.go('users', { page: vm.pageNo, roleGroupId: vm.chosenRoleGroupId }, { reload: true });
            }

            vm.parseResponse = function(response) {
                vm.users = response.list;
                vm.pageNo = response.pageNo;
                vm.totalItems = response.totalItems;
                vm.itemPerPage = response.itemPerPage;
            }
            
        }
    ]);