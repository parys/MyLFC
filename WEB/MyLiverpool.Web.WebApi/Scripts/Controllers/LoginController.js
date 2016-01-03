var LoginController = function ($scope, SessionService, Authentication, validationService) {
    $scope.loginForm = {
        userName: undefined,
        password: undefined,
        errorMessage: undefined
    };

    $scope.login = function () {
        if (new validationService().checkFormValidity($scope)) {
            Authentication.login($scope.loginForm);
        }
    }
}
LoginController.$inject = ['$scope', 'SessionService', 'Authentication', 'validationService'];