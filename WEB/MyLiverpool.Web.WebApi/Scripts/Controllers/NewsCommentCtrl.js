var NewsCommentCtrl = function ($scope, $uibModal, NewsCommentsFactory, Authentication, $rootScope) {//, $sce) {
    function findWithAttr(array, attr, value) {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    };

    $scope.editComment = function (comment) {
        console.log('deit 11');
        console.log(comment);
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'modalEditComment.html',
            controller: 'ModalEditCommentCtrl',
            resolve: {
                editingComment: function() {
                    return comment;
                }
            }
        });

        modalInstance.result.then(function () {
            console.log('editing confirm');
            NewsCommentsFactory.edit(comment).
                then(function (response) {
                    if (response) {
                     //   $scope.$emit('editCommentConfirmed', editedComment);
                         $rootScope.alerts.push({ type: 'success', msg: 'Комментарий успешно измененен.' });
                     //    $state.go('home');

                    }
                },
                    function (response) {
                        $rootScope.alerts.push({ type: 'danger', msg: 'Комментарий не был измененен.' });
                    });
        }, function () {
        });
    }

    $scope.deleteComment = function (comment) {
        console.log("123 " + comment.id);
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
            NewsCommentsFactory.delete(comment.id).
                then(function (response) {
                    if (response) {
                        // $rootScope.alerts.push({ type: 'success', msg: 'Новость успешно удалена.' });
                        $scope.$emit('deleteCommentConfirmed', comment);
                        //console.log($scope.item.comments);
                        //var index = findWithAttr($scope.item.comments, 'id', id);
                        //console.log(index);
                        //$scope.item.comments.splice(index, 1);
                    }
                },
                    function (response) {
                        $rootScope.alerts.push({ type: 'danger', msg: 'Новость не была удалена.' });
                    });
        }, function () {
        });
    }

    $scope.isModerator = function () {
      //  console.log('isModerator NewsCommentCtrl');
        return Authentication.isModerator();
    }

    $scope.isUserAuthor = function (userId, newsUserId) {
     //   console.log('isUserAuthor NewsCommentCtrl ' + userId + ' ' + newsUserId);
        
        return userId == newsUserId;
    }

    $scope.getUserId = function() {
        return Authentication.getUserId();
    }

   
};

NewsCommentCtrl.$inject = ['$scope', '$uibModal', 'NewsCommentsFactory', 'Authentication', '$rootScope'];//, '$sce'];