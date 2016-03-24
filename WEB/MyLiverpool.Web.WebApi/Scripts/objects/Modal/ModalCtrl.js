'use strict';
angular.module('liverpoolApp')
    .controller('ModalCtrl', [
        '$scope', '$uibModalInstance', function($scope, $uibModalInstance) {

            $scope.ok = function() {
                $uibModalInstance.close('ok');
            };

            $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);

//ModalCtrl.$inject = ['$scope', '$uibModalInstance'];