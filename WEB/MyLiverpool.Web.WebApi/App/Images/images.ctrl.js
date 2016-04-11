'use strict';
angular.module('images.ctrl', [])
    .controller('ImagesCtrl', [
        'ImagesFactory', '$stateParams',
        function(ImagesFactory, $stateParams) {
            var vm = this;

            vm.files = '';

            vm.init = function() {
                ImagesFactory.getImages($stateParams.path)
                    .then(function(response) {
                            vm.files = response;
                        },
                        function(response) {
                            //.f = "";
                        });
            };
        }
    ]);