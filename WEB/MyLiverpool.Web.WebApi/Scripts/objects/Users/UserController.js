var UserController = function ($scope, $stateParams, UsersFactory, RoleGroupsFactory) {
    $scope.user = [];
    $scope.roleGroups = [];
    $scope.id = $stateParams.id;
    $scope.init = function() {
        UsersFactory.getUser($scope.id)
            .then(function(response) {
                $scope.user = response;
            },
                function(response) {
                    //$scope.f = "";
                });
        RoleGroupsFactory.get()
            .then(function(response) {
                    $scope.roleGroups = response;
                },
                function(response) {

                });
    };
};

UserController.$inject = ['$scope', '$stateParams', 'UsersFactory', 'RoleGroupsFactory'];