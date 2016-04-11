'use strict';
angular.module('liverpoolApp')
    .controller('PmsController', [
        'PmsFactory',
        function(PmsFactory) {
            var vm = this;
            vm.received = [];
            vm.sent = [];
            vm.init = function() {
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