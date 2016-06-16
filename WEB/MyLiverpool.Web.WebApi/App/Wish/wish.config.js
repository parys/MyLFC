'use strict';

angular.module('wish.config',
    ['wish.factory', 'wish.ctrl'])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('wishes', {
                    url: '/wishes?page',
                    templateUrl: function(params) { return '/app/wish/views/list?page=' + params.page; },
                    controller: 'WishCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Пожелания'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Пожелания',
                        parent: 'home'
                    }
                })
                .state('wishEdit', {
                    url: '/wishEdit?id',
                    templateUrl: function(params) { return '/app/wish/views/edit?id=' + params.id; },
                    controller: 'WishCtrl',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function () { return 'Редактирование'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование',
                        parent: 'wishes'
                    }
                });
        }
    ]);