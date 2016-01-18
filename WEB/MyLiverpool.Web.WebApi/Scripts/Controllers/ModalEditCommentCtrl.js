var ModalEditCommentCtrl = function ($scope, $uibModalInstance, editingComment) {
    $scope.editingComment = editingComment;
    $scope.oldMessage = editingComment.message;
    $scope.oldAnswer = editingComment.answer;

    $scope.ok = function () {
        $uibModalInstance.close(editingComment);
    };

    $scope.cancel = function () {
        $scope.editingComment.message = $scope.oldMessage;
        $scope.editingComment.answer = $scope.oldAnswer;
        $uibModalInstance.dismiss('cancel');
    };
};

ModalEditCommentCtrl.$inject = ['$scope', '$uibModalInstance', 'editingComment'];