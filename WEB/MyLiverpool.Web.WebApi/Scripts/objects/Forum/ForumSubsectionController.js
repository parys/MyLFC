'use strict';
angular.module('liverpoolApp')
    .controller('ForumSubsectionController', [
        '$scope', 'ForumFactory',
        function($scope, ForumFactory) {
            $scope.themes = [];
            $scope.pageNo = 1;
            $scope.countPage = 1;
            $scope.id = undefined;
            $scope.name = undefined;
            $scope.description = undefined;

            $scope.init = function() {
                ForumFactory.getSubsection()
                    .then(function(response) {
                            $scope.themes = response.themes.list;
                            $scope.pageNo = response.themes.pageNo;
                            $scope.countPage = response.themes.countPage;
                            $scope.id = response.id;
                            $scope.name = response.name;
                            $scope.description = response.description;

                        },
                        function(response) {
                            
                        });
            };
        }
    ]);