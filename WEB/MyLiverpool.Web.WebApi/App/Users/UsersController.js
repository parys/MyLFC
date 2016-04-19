'use strict';
angular.module('users.ctrl')
    .controller('UsersController', [
        '$stateParams', '$state', 'UsersFactory', 'RoleGroupsFactory',
        function ($stateParams, $state, UsersFactory, RoleGroupsFactory) {
            var vm = this;
            vm.users = [];
            vm.pageNo = $stateParams.page;
            vm.totalItems = undefined;
            vm.itemPerPage = undefined;
            vm.userRole = undefined;
            vm.roleGroups = undefined;

            vm.chosenRoleGroupId = Number($stateParams.roleGroupId);
            vm.filterUserName = undefined;

            vm.init = function () {
                vm.updateUsers();
                RoleGroupsFactory.get()
                    .then(function (response) {
                        vm.roleGroups = response;
                        vm.roleGroups.push({ name: 'Все группы', id: undefined });
                            //if ($stateParams.roleGroupId) {
                            //    vm.chosenRoleGroupId = ;
                            //}
                        },
                        function (response) {
                        });
            };

            vm.getDto = function(){
                return {
                    page: vm.pageNo,
                    roleGroupId: vm.chosenRoleGroupId,
                    userName: vm.filterUserName
                }
            }

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

            vm.filterByUserName = function () {
                if (!vm.filterUserName) return;
                vm.updateUsers();
            }

            vm.updateUsers = function() {
                UsersFactory.getUsers(vm.getDto())
                    .then(function (response) {
                        vm.parseResponse(response);
                    },
                        function (response) {
                        });
            }
            
        }
    ]);