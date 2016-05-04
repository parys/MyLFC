'use strict';
angular.module('pm.ctrl', [])
    .controller('PmController', [
        '$stateParams', 'PmFactory',
        function($stateParams, PmFactory) {
            var vm = this;
            vm.message = undefined;

            vm.init = function() {
                PmFactory.getMessage($stateParams.id)
                    .then(function(response) {
                            vm.message = response;
                        },
                        function(response) {
                            //.f = "";
                        });
            };
        }
    ]);