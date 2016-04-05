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
                vm.editingComment.message = vm.oldMessage;
                vm.editingComment.answer = vm.oldAnswer;
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);