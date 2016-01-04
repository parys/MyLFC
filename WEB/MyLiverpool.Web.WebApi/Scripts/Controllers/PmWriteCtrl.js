var PmWriteCtrl = function ($scope, $stateParams, PmsFactory, validationService, $rootState, $state) {
    $scope.message = {
        receiverId: undefined,
        title: undefined,
        message: undefined
}
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

};

PmWriteCtrl.$inject = ['$scope', '$stateParams', 'PmsFactory', 'validationService', '$rootState', '$state'];