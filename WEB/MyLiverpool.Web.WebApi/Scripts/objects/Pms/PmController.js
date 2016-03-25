'use strict';
angular.module('liverpoolApp')
    .controller('PmController', [
        '$scope', '$stateParams', 'PmsFactory',
        function($scope, $stateParams, PmsFactory) {
            $scope.message = undefined;

            var init = function() {
                PmsFactory.getMessage($stateParams.id)
                    .then(function(response) {
                            $scope.message = response;
                        },
                        function(response) {
                            //$scope.f = "";
                        });
            };

            init();
        }
    ]);