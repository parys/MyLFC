var LoginController = function ($scope, SessionService, Authentication, ValidationService, $stateParams, $location) {

    $scope.loginForm = {
        userName: undefined,
        password: undefined,
        errorMessage: undefined
    };

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


}
LoginController.$inject = ['$scope', 'SessionService', 'Authentication', 'ValidationService', '$stateParams', '$location'];