'use strict';

angular.module('user.config',
    ['users.factory', 'users.ctrl'])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('userInfo', {
                    url: '/userInfo?id',
                    templateUrl: function(params) { return '/app/user/views/info.html?id=' + params.id; },
                    controller: 'UserController',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function() { return 'Профиль пользователя'; }
                    },
                    ncyBreadcrumb: {
                        label: '{{vm.user.userName}}',
                        parent: 'users'
                    }
                })
                .state('users', {
                    url: '/users?page&roleGroupId&userName',
                    templateUrl: function (params) { return '/app/user/views/list.html?page=' + params.page + '&roleGroupId=' + params.roleGroupId + '&userName=' + params.userName; },
                    controller: 'UserController',
                    controllerAs: 'vm',
                    resolve: {
                        $title: function() { return 'Пользователи'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Пользователи',
                        parent: 'home'
                    }
                });
        }
    ]);