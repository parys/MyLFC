var NewsItemController = function ($scope, NewsFactory, $uibModal, NewsCommentsFactory, $state) {//, $sce) {
    $scope.item = [];

    $scope.newComment = undefined;

    function resetNewComment() {
        $scope.newComment = {
            id: undefined,
            message: undefined,
            parentId: undefined,
            newsItemId: undefined,
            authorId: undefined,
            authorUserName: undefined,
            answer: undefined,
        }
    }


    $scope.init = function () {
        resetNewComment();
        NewsFactory.getItem()
            .then(function (response) {
                $scope.item = response;
            },
                function (response) {
                    //$scope.f = "";
                });
    };

    $scope.activate = function () {
        NewsFactory.activate($scope.id).
            then(function(response) {
                    if (response) {
                        $scope.newsItems[index].pending = false;
                        $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно активирована.' });
                    }
                },
                function(response) {
                    $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была активирована.' });
                });
    }

    $scope.isUserAuthor = function (userId, newsUserId) {
        console.log('isUserAuthor + NewsItemController');
        return userId == newsUserId;
    }
    
    $scope.delete = function () {
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

        modalInstance.result.then(function() {
            NewsFactory.delete($scope.item.id).
                then(function(response) {
                        if (response) {
                            // $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                            $state.go('home');
                        }
                    },
                    function(response) {
                        $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была удалена.' });
                    });
        }, function() {
        });
    }

    $scope.addComment = function () {
        $scope.newComment.newsItemId = $scope.item.id;
        NewsCommentsFactory.add($scope.newComment).
            then(function(response) {
                //todo 

                $scope.newComment = response;
               // $scope.newComment.authorId = 1;
              //  $scope.newComment.authorUserName = 'adminka';
                $scope.item.comments.push($scope.newComment);
                    resetNewComment();
                },
                function(response) {
                    console.log('NOT added');
                });
    }

    
    $scope.$on('deleteCommentConfirmed', function (event, data) {
        console.log('del  ' + $scope.item.comments);
        var comments = $scope.item.comments;
        comments.splice(comments.indexOf(data), 1);
    });

    //$scope.$on('editCommentConfirmed', function(event, data) {
    //    console.log('edit ' + scope.item.comments);
    //    var comments = $scope.item.comments;
    //    comments[comments.indexOf(data)] = data;
    //});


    // init();
};

NewsItemController.$inject = ['$scope', 'NewsFactory', '$uibModal', 'NewsCommentsFactory', '$state'];//, '$sce'];