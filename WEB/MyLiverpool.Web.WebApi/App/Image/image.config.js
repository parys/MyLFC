'use strict';
angular.module('image.config',
    ['image.factory', 'image.ctrl'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('images', {
                    url: '/images?path',
                    templateUrl: function(params) { return '/app/image/views/index?path=' + params.path },
                    controller: 'ImageCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function() { return 'Изображения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Изображения',
                        parent: 'home'
                    }
                });
        }
    ]);