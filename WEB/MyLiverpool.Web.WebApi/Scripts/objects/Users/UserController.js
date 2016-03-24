'use strict';
angular.module('liverpoolApp')
    .controller('UserController', [
        '$scope', '$stateParams', 'UsersFactory', 'RoleGroupsFactory', '$uibModal', '$rootScope', 'Upload', 'Authentication',
        function ($scope, $stateParams, UsersFactory, RoleGroupsFactory, $uibModal, $rootScope, Upload, Authentication) {
            $scope.user = [];
            $scope.roleGroups = [];
            $scope.id = $stateParams.id;
            $scope.roleGroupId = undefined;
            $scope.banDaysCount = 0;
            $scope.init = function() {
                UsersFactory.getUser($scope.id)
                    .then(function(response) {
                            $scope.user = response;
                            $scope.roleGroupId = response.roleGroupId;
                        },
                        function(response) {
                            //$scope.f = "";
                        });
                RoleGroupsFactory.get()
                    .then(function(response) {
                            $scope.roleGroups = response;
                        },
                        function(response) {
                        });
            };

            $scope.editRole = function() {
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'changeRoleConfirmation.html',
                    controller: 'ModalCtrl' //,
                    //resolve: {
                    //    id: function() {
                    //        return $scope.selectedNewsId;
                    //    }
                    //}
                });

                modalInstance.result.then(function() {
                    UsersFactory.editRole($scope.user.id, $scope.user.roleGroupId).
                        then(function(response) {
                                if (response) {
                                    $scope.roleGroupId = $scope.user.roleGroupId;
                                    $rootScope.alerts.push({ type: 'success', msg: 'Роль успешно изменена.' });
                                }
                            },
                            function(response) {
                                $scope.user.roleGroupId = $scope.roleGroupId;
                                $rootScope.alerts.push({ type: 'danger', msg: 'Роль не была изменена.' });
                            });
                }, function() {
                    $scope.user.roleGroupId = $scope.roleGroupId;
                });
            }

            $scope.ban = function() {
                if ($scope.banDaysCount <= 0) {
                    return;
                }
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'banConfirmation.html',
                    controller: 'ModalCtrl'
                });

                modalInstance.result.then(function() {
                    UsersFactory.banUser($scope.id, $scope.banDaysCount).
                        then(function(response) {
                                if (response) {
                                    var banDate = new Date();
                                    banDate.setDate(banDate.getDate() + $scope.banDaysCount);

                                    $scope.user.lockoutEndDateUtc = banDate;
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

            $scope.unban = function() {
                UsersFactory.unbanUser($scope.id).
                    then(function(response) {
                            if (response) {
                                $scope.user.lockoutEndDateUtc = null;
                                $rootScope.alerts.push({ type: 'success', msg: 'Активность пользователя успешно разблокирована.' });
                            } else {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Активность пользователя не была разблокирована.' });
                            }
                        },
                        function(response) {
                            $rootScope.alerts.push({ type: 'danger', msg: 'Активность пользователя не была разблокирована.' });
                        });
            }


            $scope.f = undefined;
            $scope.errFile = undefined;
            $scope.uploadFiles = function(file, errFiles) {
                $scope.f = file;
                $scope.errFile = errFiles && errFiles[0];
                if (file) {
                    file.upload = Upload.upload({
                        url: '/api/upload/avatar?userId=' + $scope.user.id,
                        method: "POST",
                        file: file
                    });

                    file.upload.then(function(response) {
                        console.log(response);
                        $scope.user.photo = response.data + '?r=' + Math.round();
                        if ($scope.user.id == Authentication.getUserId()) {
                            $rootScope.userImage = $scope.user.photo;
                        }
                    }, function(response) {
                        if (response.status > 0)
                            $scope.errorMsg = response.status + ': ' + response.data;
                    }, function(evt) {
                        file.progress = Math.min(100, parseInt(100.0 *
                            evt.loaded / evt.total));
                    });
                }
            }
        }
    ]);

//UserController.$inject = ['$scope', '$stateParams', 'UsersFactory', 'RoleGroupsFactory', '$uibModal', '$rootScope', 'Upload', 'Authentication'];