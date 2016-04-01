'use strict';
angular.module('liverpoolApp')
    .controller('ModalCtrl', [
        '$uibModalInstance', 
        function($uibModalInstance) {
            var vm = this;
            vm.ok = function() {
                $uibModalInstance.close('ok');
            };

            vm.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);