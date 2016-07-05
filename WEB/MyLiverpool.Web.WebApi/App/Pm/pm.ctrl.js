'use strict';
angular.module('pm.ctrl', [])
    .controller('PmController', [
        '$stateParams', 'PmFactory', 'ValidationService', '$state', '$rootScope', 'UsersFactory', 'Authentication',
        function ($stateParams, PmFactory, ValidationService, $state, $rootScope, UsersFactory, Authentication) {
            var vm = this;
            vm.message = {
                title: "",
                message: "",
                receiverUserName: ""
            };
            vm.errorMessage = undefined;
            vm.userNames = [];
            vm.received = [];
            vm.sent = [];
            vm.replyTo = undefined;

            vm.init = function() {
                PmFactory.getMessage($stateParams.id)
                    .then(function(response) {
                            vm.message = response;
                            vm.replyTo = response.receiverId === Authentication.getUserId() ? response.senderUserName : response.receiverUserName;
                        },
                        function(response) {
                            //.f = "";
                        });
            };

            vm.initList = function () {
                PmFactory.getMessages()
                    .then(function(response) {
                            vm.received = response.received;
                            vm.sent = response.sent;
                        },
                        function(response) {
                            //.f = "";
                        });
            };

            vm.send = function() {
                if (vm.userNames.indexOf(vm.message.receiverUserName) < 0) {
                    if (vm.message.receiverUserName !== null && vm.message.receiverUserName.length > 0) {
                        vm.errorMessage = "Пользователя с логином " + vm.message.receiverUserName + " не существует";
                        vm.message.receiverUserName = "";
                    }
                } else {
                    vm.errorMessage = undefined;
                }

                PmFactory.sentMessage(vm.message)
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
            };

            vm.updateUserNames = function(typed) {
                UsersFactory.getUserNames(typed)
                    .then(function(response) {
                            vm.userNames = response;
                        },
                        function(response) {
                            vm.userNames = [];
                        });
            };

            vm.initWrite = function() {
                if ($stateParams.userName) {
                    vm.message.receiverUserName = $stateParams.userName;
                    vm.message.title = getTitle($stateParams.title); //todo update
                }
                vm.updateUserNames(vm.message.receiverUserName);
            };

            function getTitle(title) {
                var match = title.match(/\[.*]/);
                if (match) {
                    var newValue = parseInt(match[0].substring(1, match[0].length - 1));
                    return title.replace(/\[.*]/, '[' + ++newValue + ']');
                } else {
                    return 'Re[1]: ' + title;
                }
            }
        }
    ]);