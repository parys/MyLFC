'use strict';
angular.module('liverpoolApp')
    .controller('UserController', [
        '$stateParams', 'UsersFactory', 'RoleGroupsFactory', '$uibModal', '$rootScope', 'Upload', 'Authentication',
        function ($stateParams, UsersFactory, RoleGroupsFactory, $uibModal, $rootScope, Upload, Authentication) {
            var vm = this;
            vm.user = [];
            vm.roleGroups = [];
            vm.id = $stateParams.id;
            vm.roleGroupId = undefined;
            vm.banDaysCount = 0;
            vm.init = function () {
                UsersFactory.getUser(vm.id)
                    .then(function(response) {
                        vm.user = response;
                        vm.roleGroupId = response.roleGroupId;
                        },
                        function(response) {
                            //$scope.f = "";
                        });
                RoleGroupsFactory.get()
                    .then(function(response) {
                        vm.roleGroups = response;
                        },
                        function(response) {
                        });
            };

            vm.editRole = function () {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'changeRoleConfirmation.html',
                    controller: 'ModalCtrl',
                    controllerAs: 'vm'
                //resolve: {
                //    id: function() {
                //        return $scope.selectedNewsId;
                //    }
                //}
            });

                modalInstance.result.then(function() {
                    UsersFactory.editRole(vm.user.id, vm.user.roleGroupId).
                        then(function(response) {
                                if (response) {
                                    vm.roleGroupId = vm.user.roleGroupId;
                                    $rootScope.alerts.push({ type: 'success', msg: 'Роль успешно изменена.' });
                                }
                            },
                            function(response) {
                                vm.user.roleGroupId = vm.roleGroupId;
                                $rootScope.alerts.push({ type: 'danger', msg: 'Роль не была изменена.' });
                            });
                }, function() {
                    vm.user.roleGroupId = vm.roleGroupId;
                });
            }

            vm.ban = function () {
                if (vm.banDaysCount <= 0) {
                    return;
                }
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'banConfirmation.html',
                    controller: 'ModalCtrl'
                });

                modalInstance.result.then(function() {
                    UsersFactory.banUser(vm.id, vm.banDaysCount).
                        then(function(response) {
                                if (response) {
                                    var banDate = new Date();
                                    banDate.setDate(banDate.getDate() + vm.banDaysCount);

                                    vm.user.lockoutEndDateUtc = banDate;
                                    $rootScope.alerts.push({ type: 'success', msg: 'Активность пользователя успешно заблокирована.' });
                                } else {
                                    $rootScope.alerts.push({ type: 'danger', msg: 'Активность пользователя не была заблокирована.' });
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Активность пользователя не была заблокирована.' });
                            });
                }, function() {
                });
            }

            vm.unban = function () {
                UsersFactory.unbanUser(vm.id).
                    then(function(response) {
                            if (response) {
                                vm.user.lockoutEndDateUtc = null;
                                $rootScope.alerts.push({ type: 'success', msg: 'Активность пользователя успешно разблокирована.' });
                            } else {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Активность пользователя не была разблокирована.' });
                            }
                        },
                        function(response) {
                            $rootScope.alerts.push({ type: 'danger', msg: 'Активность пользователя не была разблокирована.' });
                        });
            }


            vm.f = undefined;
            vm.errFile = undefined;
            vm.uploadFiles = function (file, errFiles) {
                vm.f = file;
                vm.errFile = errFiles && errFiles[0];
                if (file) {
                    file.upload = Upload.upload({
                        url: '/api/upload/avatar?userId=' + vm.user.id,
                        method: "POST",
                        file: file
                    });

                    file.upload.then(function(response) {
                        console.log(response);
                        vm.user.photo = response.data + '?r=' + Math.round();
                        if (vm.user.id == Authentication.getUserId()) {
                            $rootScope.userImage = vm.user.photo;
                        }
                    }, function(response) {
                        if (response.status > 0)
                            vm.errorMsg = response.status + ': ' + response.data;
                    }, function(evt) {
                        file.progress = Math.min(100, parseInt(100.0 *
                            evt.loaded / evt.total));
                    });
                }
            }
        }
    ]);