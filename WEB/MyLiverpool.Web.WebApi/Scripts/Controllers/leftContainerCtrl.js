'use strict';
angular.module('liverpoolApp')
    .controller('leftContainerCtrl', [
        '$scope',
        function($scope) {
            $scope.title = 'i am left';
        }
    ]);