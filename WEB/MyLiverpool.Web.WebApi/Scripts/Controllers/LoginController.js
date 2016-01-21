var LoginController = function ($scope, SessionService, Authentication, validationService, $stateParams, $location) {
    $scope.loginForm = {
        userName: undefined,
        password: undefined,
        errorMessage: undefined
    };

    $scope.login = function () {
        if (new validationService().checkFormValidity($scope)) {
            Authentication.login($scope.loginForm);
            if ($stateParams.returnUrl) {
                $location.url($stateParams.returnUrl);
            } else {
                $location.url('/');
            }
        }
    }
}
LoginController.$inject = ['$scope', 'SessionService', 'Authentication', 'validationService', '$stateParams', '$location'];