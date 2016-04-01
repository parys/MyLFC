'use strict';
angular.module('liverpoolApp')
    .controller('ModalForumCtrl', [
        '$uibModalInstance', 'sectionName',
        function ($uibModalInstance, sectionName) {
            var vm = this;
            vm.sectionName = sectionName;

            vm.ok = function () {
                $uibModalInstance.close(vm.sectionName);
            };

            vm.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);