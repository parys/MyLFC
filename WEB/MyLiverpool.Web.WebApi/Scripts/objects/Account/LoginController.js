﻿var LoginController = function ($scope, SessionService, Authentication, ValidationService, AccountFactory, $state) {

    $scope.loginForm = {
        userName: undefined,
        password: undefined,
        errorMessage: undefined
    };

    $scope.email = undefined;

    $scope.login = function () {
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

    $scope.resendConfirmLetter = function () {
        AccountFactory.resendConfirmEmail($scope.email)
            .then(function (response) {
                $scope.result = response;
                $state.go('emailSent');
            },
                function (response) {
                    $scope.result = response;
                });
    }

    $scope.forgot = function () {
        AccountFactory.forgotPassword($scope.email)
            .then(function (response) {
                $scope.result = response;
                $state.go('emailSent');
            },
                function (response) {
                    $scope.result = response;
                });
    }
}
LoginController.$inject = ['$scope', 'SessionService', 'Authentication', 'ValidationService', 'AccountFactory', '$state'];