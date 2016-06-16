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
            vm.filterUserName = $stateParams.userName;

            vm.init = function () {
                vm.updateUsers();
                RoleGroupsFactory.get()
                    .then(function (response) {
                        vm.roleGroups = response;
                        vm.roleGroups.push({ name: 'Все группы', id: NaN });
                        },
                        function (response) {
                            console.log(response);
                        });
            };

            vm.getDto = function(){
                var dto = {
                    page: vm.pageNo,
                    roleGroupId: vm.chosenRoleGroupId,
                    userName: vm.filterUserName
                }
                return dto;
            }

            vm.isNotSelf = function(userId, userId2) {
                return Number(userId) !== Number(userId2);
            }

            vm.goToPage = function() {
                $state.go('users', { page: vm.pageNo, roleGroupId: vm.chosenRoleGroupId }, { reload: true });
            }

            vm.changeRoleId = function () {
                $stateParams.roleGroupId = vm.chosenRoleGroupId;
                vm.filter();
            }

            vm.parseResponse = function(response) {
                vm.users = response.list;
                vm.pageNo = response.pageNo;
                vm.totalItems = response.totalItems;
                vm.itemPerPage = response.itemPerPage;
            }

            vm.filterByUserName = function () {
                $stateParams.userName = vm.filterUserName;
                vm.filter();
            }

            vm.updateUsers = function() {
                UsersFactory.getUsers(vm.getDto())
                    .then(function (response) {
                        vm.parseResponse(response);
                    },
                        function (response) {
                            console.log(response);
                        });
            }

            vm.filter = function() {
                $state.go('users', { page: vm.pageNo, roleGroupId: vm.chosenRoleGroupId, userName: vm.filterUserName }, { reload: true });
            }
        }
    ]);