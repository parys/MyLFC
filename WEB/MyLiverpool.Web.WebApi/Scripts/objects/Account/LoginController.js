'use strict';
angular.module('liverpoolApp')
    .controller('LoginController', [
        '$scope', 'SessionService', 'Authentication', 'ValidationService', 'AccountFactory', '$state', '$rootScope',
        function ($scope, SessionService, Authentication, ValidationService, AccountFactory, $state, $rootScope) {

            $scope.loginForm = {
                userName: undefined,
                password: undefined,
                errorMessage: undefined
            };

            $scope.resetForm = {
                email: undefined,
                password: undefined,
                confirmPassword: undefined,
                code: undefined
            };

            $scope.changeForm = {
                oldPassword: undefined,
                newPassword: undefined,
                confirmPassword: undefined
            }

            $scope.email = undefined;

            $scope.login = function() {
                if (new ValidationService().checkFormValidity($scope.loginForm)) {
                    Authentication.login($scope.loginForm);
                    //console.log(Authentication.exists());
                    //if (Authentication.exists()) {
                    //    if ($stateParams.returnUrl) {
                    //        $location.url($stateParams.returnUrl);
                    //    } else {
                    //        $location.url('/');
                    //    }
                    //}
                }
            }

            $scope.resendConfirmLetter = function() {
                AccountFactory.resendConfirmEmail($scope.email)
                    .then(function(response) {
                            $scope.result = response;
                            $state.go('emailSent');
                        },
                        function(response) {
                            $scope.result = response;
                        });
            }

            $scope.forgot = function() {
                AccountFactory.forgotPassword($scope.email)
                    .then(function(response) {
                            $scope.result = response;
                            $state.go('emailSent');
                        },
                        function(response) {
                            $scope.result = response;
                        });
            }

            $scope.reset = function() {
                $scope.resetForm.code = $state.params.code;
                AccountFactory.resetPassword($scope.resetForm)
                    .then(function(response) {
                            $state.go('home');
                            $rootScope.alerts.push({ type: 'success', msg: 'Пароль успешно изменен.' });
                        },
                        function(response) {

                        });
            }

            $scope.change = function() {
                AccountFactory.changePassword($scope.changeForm)
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