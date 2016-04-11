'use strict';
angular.module('images.config',
    ['images.factory', 'images.ctrl'])
    .config([
        '$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('images', {
                    url: '/images?path',
                    templateUrl: function(params) { return '/app/images/views/index?path=' + params.path },
                    controller: 'ImagesCtrl',
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