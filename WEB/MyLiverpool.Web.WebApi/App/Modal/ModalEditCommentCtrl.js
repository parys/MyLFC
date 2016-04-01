'use strict';
angular.module('liverpoolApp')
    .controller('ModalEditCommentCtrl', [
        '$uibModalInstance', 'editingComment', 'Authentication',
        function($uibModalInstance, editingComment, Authentication) {
            var vm = this;
            vm.editingComment = editingComment;
            vm.oldMessage = editingComment.message;
            vm.oldAnswer = editingComment.answer;

            vm.ok = function() {
                $uibModalInstance.close(editingComment);
            };

            vm.cancel = function() {
                vm.editingComment.message = $scope.oldMessage;
                vm.editingComment.answer = $scope.oldAnswer;
                $uibModalInstance.dismiss('cancel');
            };

            vm.isModerator = function() {
                return Authentication.isModerator();
            }
        }
    ]);