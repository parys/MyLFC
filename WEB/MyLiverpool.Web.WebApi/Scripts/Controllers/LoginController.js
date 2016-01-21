var LoginController = function ($scope, SessionService, Authentication, validationService, $stateParams, $location) {
    $scope.loginForm = {
        userName: undefined,
        password: undefined,
        errorMessage: undefined
    };

    $scope.login = function () {
        if (new validationService().checkFormValidity($scope)) {
            Authentication.login($scope.loginForm);
            if (Authentication.authenticatedUser != undefined) {
                console.log('logged in ' + $stateParams.returnUrl);
                console.log($location);
                $location.url($stateParams.returnUrl);
            } else {
                
            }
        }
    }
}
LoginController.$inject = ['$scope', 'SessionService', 'Authentication', 'validationService', '$stateParams', '$location'];