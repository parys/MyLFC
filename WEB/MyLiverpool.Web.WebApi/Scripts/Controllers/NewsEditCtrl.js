var NewsEditCtrl = function ($scope, NewsFactory, $stateParams, validationService, $state) {//, $uibModal, $rootScope) {
    $scope.item = {
        id: undefined,
        title: undefined,
        brief: undefined,
        message: undefined,
        source: undefined,
        photoPath: undefined,
        canCommentary: undefined,
        onTop: undefined,
        pending: undefined,
        newsCategoryId: ''
    };
    $scope.categories = [];

    //$scope.$modalInstance = undefined;

    var init = function() {
        if ($stateParams.id) {
            NewsFactory.getItem($stateParams.id)
                .then(function(response) {
                        $scope.item = response;
                    },
                    function(response) {
                        //$scope.f = "";
                    });
        }
        NewsFactory.getCategories()
            .then(function(response) {
                    $scope.categories = response;
                },
                function(response) {
                    //$scope.f = "";
                });
    };

    $scope.save = function () {
        if (new validationService().checkFormValidity($scope)) {
            if (!$scope.item.id) {
                NewsFactory.create($scope.item)
                    .then(function(response) {
                            if (response) {
                              //  $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно создана.' });
                                $state.go('news');
                            }
                        },
                        function(response) {
                            //$rootScope.alerts.push({ type: 'danger', msg: 'Новость не была добавлена.' });
                        });
            } else {
                NewsFactory.edit($scope.item)
                    .then(function (response) {
                        if (response) {
                          //  $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно создана.' });
                            $state.go('newsInfo', { id: $scope.item.id });
                        }
                    },
                        function (response) {
                          //  $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была добавлена.' });
                        });
            }
        }
    };

    init();
};

NewsEditCtrl.$inject = ['$scope', 'NewsFactory', '$stateParams', 'validationService', '$state'];