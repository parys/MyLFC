var UserController = function ($scope, $stateParams, UsersFactory) {
    $scope.user = [];
    $scope.id = $stateParams.id;
    var init = function() {
        UsersFactory.getUser($scope.id)
            .then(function(response) {
                $scope.user = response;
            },
                function(response) {
                    //$scope.f = "";
                });
    };

    init();
};

UserController.$inject = ['$scope', '$stateParams', 'UsersFactory'];