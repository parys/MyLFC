'use strict';
angular.module('forum.ctrl')
    .controller('ForumThemeController', [
        'ForumFactory', '$stateParams',
        function(ForumFactory, $stateParams) {
            var vm = this;
            vm.messages = [];
            vm.pageNo = 1;
            vm.countPage = 1;
            vm.id = undefined;
            vm.name = undefined;
            vm.description = undefined;

            vm.init = function() {
                ForumFactory.getTheme($stateParams.id, $stateParams.page)
                    .then(function(response) {
                            vm.messages = response.messages.list;
                            vm.pageNo = response.messages.pageNo;
                            vm.countPage = response.messages.countPage;
                            vm.id = response.id;
                            vm.name = response.name;
                            vm.description = response.description;

                        },
                        function(response) {
                            
                        });
            };
        }
    ]);