'use strict';

angular.module('users.config',
    ['users.factory', 'users.ctrl'])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('userInfo', {
                    url: '/userInfo?id',
                    templateUrl: function(params) { return '/app/users/views/info?id=' + params.id },
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
                    templateUrl: function (params) { return '/app/users/views/list?page=' + params.page + '&roleGroupId=' + params.roleGroupId + '&userName=' + params.userName },
                    controller: 'UsersController',
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