'use strict';
angular.module('forum.ctrl')
    .controller('ForumSubsectionController', [
        'ForumFactory',
        function(ForumFactory) {
            var vm = this;
            vm.themes = [];
            vm.pageNo = 1;
            vm.countPage = 1;
            vm.id = undefined;
            vm.name = undefined;
            vm.description = undefined;

            vm.init = function() {
                ForumFactory.getSubsection()
                    .then(function(response) {
                            vm.themes = response.themes.list;
                            vm.pageNo = response.themes.pageNo;
                            vm.countPage = response.themes.countPage;
                            vm.id = response.id;
                            vm.name = response.name;
                            vm.description = response.description;

                        },
                        function(response) {
                            
                        });
            };
        }
    ]);