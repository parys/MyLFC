var LoginController = function ($scope, SessionService, Authentication, ValidationService, AccountFactory) {

    $scope.loginForm = {
        userName: undefined,
        password: undefined,
        errorMessage: undefined
    };

    $scope.userName = undefined;

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

    $scope.resendConfirmLetter = function() {
        AccountFactory.resendConfirmEmail($scope.userName)
            .then(function(response) {
                    $scope.result = response;
                },
                function(response) {
                    $scope.result = response;
                });
    }
}
LoginController.$inject = ['$scope', 'SessionService', 'Authentication', 'ValidationService', 'AccountFactory'];