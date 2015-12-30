var PmsController = function ($scope, $stateParams, GetPmsFactory, SessionState) {
    $scope.received = [];
    $scope.sent = [];
    var init = function () {
        GetPmsFactory($stateParams.id)
            .then(function (response) {
                $scope.received = response.Received;
                $scope.sent = response.Sent;
            },
                function (response) {
                    //$scope.f = "";
                });
    };

    init();
};

PmsController.$inject = ['$scope', '$stateParams', 'GetPmsFactory', 'SessionService'];