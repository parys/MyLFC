﻿'use strict';

angular.module('pm.config',
    ['pm.factory', 'pm.ctrl'])
    .config([
        '$stateProvider',
        function($stateProvider) {
            $stateProvider
                .state('pms', {
                    url: '/pms',
                    views: {
                        "@": {
                            templateUrl: '/app/pm/views/pms',
                            controller: 'PmController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Личные сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Личные сообщения',
                        parent: 'home'
                    }
                })
                .state('pm', {
                    url: '/pm?id',
                    views: {
                        "@": {
                            templateUrl: function(params) { return '/app/pm/views/Pm?id=' + params.id; },
                            controller: 'PmController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        $title: function() { return 'Чтение сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Чтение сообщения',
                        parent: 'pms'
                    }
                })
                .state('wpm', {
                    url: '/wpm',
                    views: {
                        "@": {
                            templateUrl: '/app/Pm/views/wpm',
                            controller: 'PmController',
                            controllerAs: 'vm'
                        }
                    },
                    params: {
                        title: null,
                        userName: null
                    },
                    resolve: {
                        $title: function() { return 'Написание сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Написание сообщения',
                        parent: 'pms'
                    }
                });
        }
    ]);