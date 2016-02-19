var UserController = function ($scope, $stateParams, UsersFactory, RoleGroupsFactory, $uibModal, $rootScope) {
    $scope.user = [];
    $scope.roleGroups = [];
    $scope.id = $stateParams.id;
    $scope.roleGroupId = undefined;
    $scope.init = function() {
        UsersFactory.getUser($scope.id)
            .then(function(response) {
                $scope.user = response;
                    $scope.roleGroupId = response.roleGroupId;
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

    $scope.editRole = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'changeRoleConfirmation.html',
            controller: 'ModalCtrl'//,
            //resolve: {
            //    id: function() {
            //        return $scope.selectedNewsId;
            //    }
            //}
        });

        modalInstance.result.then(function () {
            UsersFactory.editRole($scope.user.id, $scope.user.roleGroupId).
                then(function (response) {
                    if (response) {
                        $scope.roleGroupId = $scope.user.roleGroupId;
                        $rootScope.alerts.push({ type: 'success', msg: 'Роль успешно изменена.' });
                    }
                },
                function (response) {
                    $scope.user.roleGroupId = $scope.roleGroupId;
                    $rootScope.alerts.push({ type: 'danger', msg: 'Роль не была изменена.' });
                });
        }, function () {
            $scope.user.roleGroupId = $scope.roleGroupId;
        });
    }
};

UserController.$inject = ['$scope', '$stateParams', 'UsersFactory', 'RoleGroupsFactory', '$uibModal', '$rootScope'];