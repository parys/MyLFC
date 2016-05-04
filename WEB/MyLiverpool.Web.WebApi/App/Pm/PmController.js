'use strict';
angular.module('pm.ctrl')
    .controller('PmController', [
        'PmFactory',
        function(PmFactory) {
            var vm = this;
            vm.received = [];
            vm.sent = [];
            vm.init = function () {
                PmFactory.getMessages()
                    .then(function(response) {
                            vm.received = response.received;
                            vm.sent = response.sent;
                        },
                        function(response) {
                            //.f = "";
                        });
            };
        }
    ]);