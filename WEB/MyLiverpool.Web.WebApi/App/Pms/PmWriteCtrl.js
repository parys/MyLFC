'use strict';
angular.module('liverpoolApp')
    .controller('PmWriteCtrl', [
        '$stateParams', 'PmsFactory', 'ValidationService', '$state', '$rootScope', 'UsersFactory',
        function($stateParams, PmsFactory, ValidationService, $state, $rootScope, UsersFactory) {
            var vm = this;
            vm.message = {
                title: "",
                message: "",
                receiverUserName: ""
            }
            vm.errorMessage = undefined;
            vm.userNames = [];

            vm.sent = function() {
                if (vm.userNames.indexOf(vm.message.receiverUserName) < 0) {
                    if (vm.message.receiverUserName != null && vm.message.receiverUserName.length > 0) {
                        vm.errorMessage = "Пользователя с логином " + vm.message.receiverUserName + " не существует";
                        vm.message.receiverUserName = "";
                    }
                } else {
                    vm.errorMessage = undefined;
                }

                if (new ValidationService().checkFormValidity(vm) && !vm.errorMessage) {
                    PmsFactory.sentMessage(vm.message)
                        .then(function(response) {
                                if (response) {
                                    //todo add cookie for 30 seconds
                                    $rootScope.alerts.push({ type: 'success', msg: 'Сообщение успешно отправлено.' });
                                    $state.go('pms');
                                }
                            },
                            function(response) {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Сообщение не было отправлено.' });
                            });
                }
            };

            vm.updateUserNames = function(typed) {
                UsersFactory.getUserNames(typed)
                    .then(function(response) {
                            vm.userNames = response;
                        },
                        function(response) {
                            vm.userNames = [];
                        });
            }

            function getTitle(title) {
                var match = title.match(/\[.*]/);
                if (match) {
                    var newValue = parseInt(match[0].substring(1, match[0].length - 1));
                    return title.replace(/\[.*]/, '[' + ++newValue + ']');
                } else {
                    return 'Re[1]: ' + title;
                }
            }

            vm.init = function() {
                if ($stateParams.userName) {
                    vm.message.receiverUserName = $stateParams.userName;
                    vm.message.title = getTitle($stateParams.title); //todo update
                }
                vm.updateUserNames(vm.message.receiverUserName);
            }
        }
    ]);