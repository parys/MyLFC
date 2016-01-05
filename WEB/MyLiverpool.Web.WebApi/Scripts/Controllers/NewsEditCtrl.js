var NewsEditCtrl = function ($scope, NewsFactory, $stateParams) {//, $uibModal, $rootScope, $state) {
    $scope.item = {
        
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

    init();
};

NewsEditCtrl.$inject = ['$scope', 'NewsFactory', '$stateParams'];