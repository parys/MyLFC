var LoginController = function ($scope, $stateParams, $location, LoginFactory) {
    $scope.loginForm = {
        emailAddress: '',
        password: '',
        rememberMe: false,
        returnUrl: $stateParams.returnUrl,

    };

    $scope.login = function() {
        //todo
    }
}

LoginController.$inject = ['$scope', '$routeParams']; var LoginController = function ($scope, $routeParams) {
    $scope.loginForm = {
        emailAddress: '',
        password: '',
        rememberMe: false,
        returnUrl: $routeParams.returnUrl
    };

    $scope.login = function () {
        //todo
    }
}

LoginController.$inject = ['$scope', '$stateParams', '$location', 'LoginFactory'];