var UserController = function ($scope, $stateParams, GetUserFactory, SessionState) {
    $scope.user = [];
    $scope.id = $stateParams.id;
    var init = function() {
        GetUserFactory($scope.id)
            .then(function(response) {
                $scope.user = response;
            },
                function(response) {
                    //$scope.f = "";
                });
    };

    init();
};

UserController.$inject = ['$scope', '$stateParams', 'GetUserFactory', 'SessionService'];