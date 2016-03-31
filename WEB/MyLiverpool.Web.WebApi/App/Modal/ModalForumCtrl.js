'use strict';
angular.module('liverpoolApp')
    .controller('ModalForumCtrl', [
        '$scope', '$uibModalInstance', 'sectionName',
        function ($scope, $uibModalInstance, sectionName) {
            $scope.sectionName = sectionName;

            $scope.ok = function () {
                $uibModalInstance.close($scope.sectionName);
            };

            $scope.cancel = function() {
                $uibModalInstance.dismiss('cancel');
            };
        }
    ]);