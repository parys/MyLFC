var NewsController = function ($scope, NewsFactory, $uibModal, $rootScope, $stateParams, $state) {
    $scope.newsItems = [];
    $scope.pageNo = undefined;
    $scope.totalItems = undefined;
    $scope.itemPerPage = undefined;

    var init = function(page, categoryId) {
        NewsFactory.getList(page, categoryId)
            .then(function(response) {
                    $scope.newsItems = response.list;
                    $scope.pageNo = response.pageNo;
                    $scope.totalItems = response.totalItems;
                    $scope.itemPerPage = response.itemPerPage;
                },
                function(response) {
                    //$scope.f = "";
                });
    };

    $scope.activate = function(index) {
        NewsFactory.activate($scope.newsItems[index].id).
                then(function (response) {
                    if (response) {
                        $scope.newsItems[index].pending = false;
                        $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно активирована.' });
                    }
                },
                function (response) {
                    $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была активирована.' });
                });
    }

    $scope.isUserAuthor = function (userId, newsUserId) {
        return userId == newsUserId;
    }

    $scope.delete = function(index) {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'modalDeleteConfirmation.html',
            controller: 'ModalCtrl'//,
            //resolve: {
            //    id: function() {
            //        return $scope.selectedNewsId;
            //    }
            //}
        });

        modalInstance.result.then(function () {
            NewsFactory.delete($scope.newsItems[index].id).
                then(function (response) {
                        if (response) {
                            $scope.newsItems.splice(index, 1);
                            $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                        }
                    },
                function (response) {
                    $rootScope.alerts.push({type: 'danger', msg: 'Новость не была удалена.'});
                });
        }, function () {
        });
    }

    $scope.goToPage = function () {
        $state.go('news', { page: $scope.pageNo, categoryId: $stateParams.categoryId });
     }

     init($stateParams.page, $stateParams.categoryId);
};

NewsController.$inject = ['$scope', 'NewsFactory', '$uibModal', '$rootScope', '$stateParams', '$state'];