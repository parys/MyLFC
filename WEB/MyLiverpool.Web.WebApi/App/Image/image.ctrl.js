'use strict';
angular.module('image.ctrl', [])
    .controller('ImageCtrl', [
        'ImageFactory', '$stateParams',
        function(ImageFactory, $stateParams) {
            var vm = this;

            vm.files = '';

            vm.init = function() {
                ImageFactory.getImages($stateParams.path)
                    .then(function(response) {
                            vm.files = response;
                        },
                        function(response) {
                            //.f = "";
                        });
            };
        }
    ]);