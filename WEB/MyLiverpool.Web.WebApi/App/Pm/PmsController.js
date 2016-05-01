'use strict';
angular.module('pms.ctrl')
    .controller('PmsController', [
        'PmsFactory',
        function(PmsFactory) {
            var vm = this;
            vm.received = [];
            vm.sent = [];
            vm.init = function () {
                console.log(123);
                PmsFactory.getMessages()
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