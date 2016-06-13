'use strict';
angular.module('liverpoolApp')
    .controller('ModalShowBigImageCtrl', [
        '$uibModalInstance', 'image',
        function ($uibModalInstance, image) {
            var vm = this;
            vm.image = image;

            vm.ok = function () {
                $uibModalInstance.close();
            };

            vm.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);