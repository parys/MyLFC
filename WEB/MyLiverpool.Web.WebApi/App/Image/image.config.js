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
                })
                .state('imagesAdd', {
                    url: '/imagesAdd',
                    templateUrl: function(params) { return '/app/image/views/add' },
                    controller: 'ImageCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function() { return 'add Изображения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'add Изображения',
                        parent: 'images'
                    }
                });
        }
    ]);