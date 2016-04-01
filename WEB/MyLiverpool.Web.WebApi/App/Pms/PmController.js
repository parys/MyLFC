'use strict';
angular.module('liverpoolApp')
    .controller('PmController', [
        '$scope', '$stateParams', 'PmsFactory',
        function($scope, $stateParams, PmsFactory) {
            var vm = this;
            vm.message = undefined;

            var init = function() {
                PmsFactory.getMessage($stateParams.id)
                    .then(function(response) {
                            vm.message = response;
                        },
                        function(response) {
                            //$scope.f = "";
                        });
            };

            init();
        }
    ]);