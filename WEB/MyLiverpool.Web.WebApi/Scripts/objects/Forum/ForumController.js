'use strict';
angular.module('liverpoolApp')
    .controller('ForumController', [
        '$scope', 'ForumFactory',
        function($scope, ForumFactory) {
            $scope.sections = [];

            var init = function() {
                ForumFactory.getSections()
                    .then(function(response) {
                            $scope.sections = response.sections;

                        },
                        function(response) {
                            //$scope.f = "";
                        });
            };

            init();
        }
    ]);

//ForumController.$inject = ['$scope', 'ForumFactory'];