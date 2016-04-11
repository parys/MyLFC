'use strict';
angular.module('news.ctrl', [])
    .controller('NewsCategoriesCtrl', [
        'NewsFactory', function(NewsFactory) {
            var vm = this;
            vm.categories = [];

            vm.init = function() {
                NewsFactory.getCategories()
                    .then(function(response) {
                            vm.categories = response;
                        },
                        function(response) {
                            //$scope.f = "";
                        });
            };
        }
    ]);