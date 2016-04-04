'use strict';
angular.module('liverpoolApp')
    .controller('ModalEditCommentCtrl', [
        '$uibModalInstance', 'editingComment',
        function($uibModalInstance, editingComment) {
            var vm = this;
            vm.editingComment = editingComment;
            vm.oldMessage = editingComment.message;
            vm.oldAnswer = editingComment.answer;

            vm.ok = function() {
                $uibModalInstance.close(editingComment);
            };

            vm.cancel = function() {
                console.log(123);
                vm.editingComment.message = $scope.oldMessage;
                vm.editingComment.answer = $scope.oldAnswer;
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);