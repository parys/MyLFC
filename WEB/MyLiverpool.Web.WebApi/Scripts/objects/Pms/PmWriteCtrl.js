var PmWriteCtrl = function ($scope, $stateParams, PmsFactory, validationService, $state, $rootScope, UsersFactory) {
    $scope.message = {
        receiverId: undefined,
        title: undefined,
        message: undefined
    }
    $scope.userNames = [];

    $scope.sent = function () {
        if (new validationService().checkFormValidity($scope) && $stateParams.userId) {
            $scope.message.receiverId = $stateParams.userId;
            PmsFactory.sentMessage($scope.message)
                .then(function(response) {
                    if (response) {
                        //todo add cookie for 30 seconds
                            $rootScope.alerts.push({ type: 'success', msg: 'Сообщение успешно отправлено.' });
                            $state.go('pms');
                        }
                    },
                    function(response) {
                        $rootScope.alerts.push({ type: 'danger', msg: 'Сообщение не было отправлено.' });
                    });
        }
    };

    $scope.updateUserNames = function (typed) {
        console.log('update ' + typed);
        UsersFactory.getUserNames(typed)
            .then(function (response) {
                console.log(response);
                    $scope.userNames = response;
                },
                function(response) {
                    $scope.userNames = [];
                });
    }
};

PmWriteCtrl.$inject = ['$scope', '$stateParams', 'PmsFactory', 'validationService', '$state', '$rootScope', 'UsersFactory'];