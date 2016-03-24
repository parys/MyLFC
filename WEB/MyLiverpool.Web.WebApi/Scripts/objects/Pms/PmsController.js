'use strict';
angular.module('liverpoolApp')
    .controller('PmsController', [
        '$scope', 'PmsFactory',
        function($scope, PmsFactory) {
            $scope.received = [];
            $scope.sent = [];
            var init = function() {
                PmsFactory.getMessages()
                    .then(function(response) {
                            $scope.received = response.received;
                            $scope.sent = response.sent;
                        },
                        function(response) {
                            //$scope.f = "";
                        });
            };

            init();
        }
    ]);

//PmsController.$inject = ['$scope', 'PmsFactory'];