'use strict';
angular.module('liverpoolApp')
    .controller('LoginController', [
        'SessionService', 'Authentication', 'ValidationService', 'AccountFactory', '$state', '$rootScope',
        function (SessionService, Authentication, ValidationService, AccountFactory, $state, $rootScope) {
            var vm = this;
            vm.loginForm = {
                userName: undefined,
                password: undefined,
                errorMessage: undefined
            };

            vm.resetForm = {
                email: undefined,
                password: undefined,
                confirmPassword: undefined,
                code: undefined
            };

            vm.changeForm = {
                oldPassword: undefined,
                newPassword: undefined,
                confirmPassword: undefined
            }

            vm.email = undefined;

            vm.login = function () {
                Authentication.login(vm.loginForm);

                //if (Authentication.exists()) {
                //    if ($stateParams.returnUrl) {
                //        $location.url($stateParams.returnUrl);
                //    } else {
                //        $location.url('/');
                //    }
                //}

            }

            vm.resendConfirmLetter = function () {
                AccountFactory.resendConfirmEmail(vm.email)
                    .then(function(response) {
                        vm.result = response;
                            $state.go('emailSent');
                        },
                        function(response) {
                            vm.result = response;
                        });
            }

            vm.forgot = function () {
                AccountFactory.forgotPassword(vm.email)
                    .then(function(response) {
                        vm.result = response;
                            $state.go('emailSent');
                        },
                        function(response) {
                            vm.result = response;
                        });
            }

            vm.reset = function () {
                vm.resetForm.code = $state.params.code;
                AccountFactory.resetPassword(vm.resetForm)
                    .then(function(response) {
                            $state.go('home');
                            $rootScope.alerts.push({ type: 'success', msg: 'Пароль успешно изменен.' });
                        },
                        function(response) {

                        });
            }

            vm.change = function () {
                AccountFactory.changePassword(vm.changeForm)
                    .then(function(response) {
                            if (response) {
                                $state.go('home');
                                $rootScope.alerts.push({ type: 'success', msg: 'Пароль успешно изменен.' });
                            } else {
                                $rootScope.alerts.push({ type: 'danger', msg: 'Пароль не был изменен.' });
                            }
                        },
                        function(response) {

                        });
            }
        }
    ]);