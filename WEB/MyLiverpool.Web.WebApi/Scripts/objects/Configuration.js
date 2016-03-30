'use strict';
angular.module('liverpoolApp')
    .config([
        '$stateProvider', '$httpProvider', '$locationProvider', '$translateProvider',
        function ($stateProvider, $httpProvider, $locationProvider, $translateProvider) {
            $locationProvider.hashPrefix('!').html5Mode({
                enabled: true,
                requireBase: false
            });

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/news/list',
                    controller: 'NewsController',
                    resolve: {
                        // Constant title
                        $title: function () { return 'Главная'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Главная'
                    }
                })
                .state('rules', {
                    url: '/rules',
                    templateUrl: '/home/rules',
                    controller: 'leftContainerCtrl', //todo change
                    resolve: {
                        $title: function () { return 'Правила'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Правила',
                        parent: 'home'
                    }
                })
                .state('clubHistory', {
                    url: '/clubHistory',
                    views: {
                        "@": {
                            templateUrl: '/home/clubHistory'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Краткая история ЛФК'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Краткая история ЛФК',
                        parent: 'home'
                    }
                })
                .state('news', {
                    url: '/news?page&categoryId',
                    templateUrl: function (params) { return '/news/list?page=' + params.page + '&categoryId=' + params.categoryId },
                    controller: 'NewsController',

                    resolve: {
                        $title: function () { return 'Новости'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Новости',
                        parent: 'home'
                    }
                })
                .state('newsInfo', {
                    url: '/newsInfo?id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/news/info?id=' + params.id },
                            controller: 'NewsItemController'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Название новости'; } //todo
                    },
                    ncyBreadcrumb: {
                        label:// function($scope) {
                         //   return $scope.item.title || 
                         'Название новости',
                        //},
                        parent: 'news'
                    }
                })
                .state('newsEdit', {
                    url: '/newsEdit?id',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/news/Edit?id=' + params.id },
                            controller: 'NewsEditCtrl'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Редактирование новости'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Редактирование новости',
                        parent: 'news'//function (params) {
                        // return 'newsInfo({id:' + params.id + '})';
                        //  }
                    }
                })
                .state('newsCategories', {
                    url: '/newsCategories',
                    templateUrl: '/news/Categories',
                    controller: 'NewsCategoriesCtrl',
                    resolve: {
                        $title: function () { return 'Категории новостей'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Категории новостей',
                        parent: 'news'
                    }
                })
                .state('userInfo', {
                    url: '/userInfo?id',
                    templateUrl: function (params) { return '/user/info?id=' + params.id },
                    controller: 'UserController',
                    resolve: {
                        $title: function () { return 'Профиль '; } //todo
                    },
                    ncyBreadcrumb: {
                        label: 'Профиль',
                        parent: 'users'
                    }
                })
                .state('users', {
                    url: '/users?page',
                    templateUrl: function (params) { return '/user/list?page=' + params.page },
                    controller: 'UsersController',
                    resolve: {
                        $title: function () { return 'Пользователи'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Пользователи',
                        parent: 'home'
                    }
                })
                .state('images', {
                    url: '/images?path',
                    templateUrl: function (params) { return '/images/index?path=' + params.path },
                    controller: 'ImagesCtrl',
                    resolve: {
                        $title: function () { return 'Изображения '; } //todo
                    },
                    ncyBreadcrumb: {
                        label: 'Изображения',
                        parent: 'home'
                    }
                })
                //.state('sign-out', {
                //      url: '/signout',
                //      controller: function($state, User) {
                //          User.signOut();
                //          $state.go('home');
                //      },
                //      data: {
                //          requireLogin: false,
                //      }
                //.state('stateTwo', {
                //    url: '/stateTwo',
                //    views: {
                //        "containerMain": {
                //            templateUrl: '/routesDemo/one'
                //        },
                //        "containerTwo": {
                //            templateUrl: '/routesDemo/three'
                //        }
                //    }
                //})
                .state('pms', {
                    url: '/pms', //'?id',
                    views: {
                        "containerMain": {
                            templateUrl: '/User/Pms', //function (params) { return '/User/Pms?id=' + params.id },
                            controller: 'PmsController'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Личные сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Личные сообщения',
                        parent: 'home'
                    }
                })
                .state('pm', {
                    url: '/pm?id',
                    views: {
                        "containerMain": {
                            templateUrl: function (params) { return '/User/Pm?id=' + params.id },
                            controller: 'PmController'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Чтение сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Чтение сообщения',
                        parent: 'pms'
                    }
                })
                .state('wpm', {
                    url: '/wpm',
                    views: {
                        "containerMain": {
                            templateUrl: '/User/WritePm',
                            controller: 'PmWriteCtrl'
                        }
                    },
                    params: {
                        title: null,
                        userName: null
                    },
                    resolve: {
                        $title: function () { return 'Написание сообщения'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Написание сообщения',
                        parent: 'pms'
                    }
                })
                .state('register', {
                    url: '/register?returnUrl',
                    views: {
                        "containerMain": {
                            templateUrl: '/Account/Register',
                            controller: 'RegisterController'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Регистрация'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Регистрация',
                        parent: 'home'
                    }
                })
                .state('login', {
                    url: '/login?returnUrl',
                    views: {
                        "containerMain": {
                            templateUrl: function (params) { return '/Account/Login?returnUrl=' + params.returnUrl },
                            controller: 'LoginController'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Страница входа'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Страница входа',
                        parent: 'home'
                    }
                })
                .state('forum', {
                    url: '/forum',
                    //views: {
                    //    "containerMain": {
                    templateUrl: '/Forum/Index',
                    controller: 'ForumController',
                    // }
                    // },
                    resolve: {
                        $title: function () { return 'Форум'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Форум',
                        parent: 'home'
                    }
                })
                .state('forum.subsection', {
                    url: '/subsection?id&page',
                    views: {
                        "@": {
                            templateUrl: function (params) { return '/Forum/Subsection?id=' + params.id + '&page=' + params.page },
                            controller: 'ForumSubsectionController'
                        }
                    },
                    resolve: {
                        $title: function () { return 'Раздел'; } //todo
                    },
                    ncyBreadcrumb: {
                        label: 'Раздел',
                        // parent: 'forum'
                    }
                })
                .state('forum.subsection.theme', {
                    url: '/theme?id&page',
                    "@": {
                        templateUrl: function (params) { return '/Forum/Theme?id=' + params.id + '&page=' + params.page },
                        controller: 'ForumSubsectionController'
                        // controllerAs: vm
                    },
                    resolve: {
                        $title: function () { return 'Тема'; } //todo
                    },
                    ncyBreadcrumb: {
                        label: 'Тема',
                        parent: 'forum' //'subsection({id:' + $scope.theme ||
                        // }
                    }
                })
                .state('confirmed', {
                    url: '/confirmed',
                    "@": {
                        templateUrl: '/Account/ConfirmEmail'

                    },
                    resolve: {
                        $title: function () { return 'Ваш аккаунт подтвержден'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Ваш аккаунт подтвержден',
                        parent: 'home'
                    }
                }).state('unconfirmed', {
                    url: '/unconfirmed',
                    "@": {
                        templateUrl: '/Account/UnconfirmEmail',
                        controller: 'LoginController'

                    },
                    resolve: {
                        $title: function () { return 'Ваш аккаунт не подтвержден'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Ваш аккаунт не подтвержден',
                        parent: 'home'
                    }
                }).state('forgotPassword', {
                    url: '/forgotPassword',

                    "@": {
                        templateUrl: '/Account/forgotPassword',
                        controller: 'LoginController'

                    },
                    resolve: {
                        $title: function () { return 'Забыли пароль?'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Забыли пароль?',
                        parent: 'home'
                    }
                }).state('emailSent', {
                    url: '/emailSent',

                    "@": {
                        templateUrl: '/Account/emailSent'

                    },
                    resolve: {
                        $title: function () { return 'Письмо отправлено'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Письмо отправлено',
                        parent: 'home'
                    }
                }).state('resetPassword', {
                    url: '/resetPassword?code',

                    "@": {
                        templateUrl: '/Account/resetPassword',
                        controller: 'LoginController'

                    },
                    resolve: {
                        $title: function () { return 'Восстановление пароля'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Восстановление пароля',
                        parent: 'home'
                    }
                }).state('changePassword', {
                    url: '/changePassword',

                    "@": {
                        templateUrl: '/Account/changePassword',
                        controller: 'LoginController'

                    },
                    resolve: {
                        $title: function () { return 'Изменение пароля'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Изменение пароля',
                        parent: 'home'//todo user
                    }
                }).state('passwordChanged', {
                    url: '/passwordChanged',

                    "@": {
                        templateUrl: '/Account/passwordChanged'

                    },
                    resolve: {
                        $title: function () { return 'Пароль успешно изменен'; }
                    },
                    ncyBreadcrumb: {
                        label: 'Пароль успешно изменен',
                        parent: 'home'//todo user
                    }
                });

            $translateProvider.useStaticFilesLoader({
                prefix: 'Scripts/angular-validation/locales/',
                suffix: '.json'
            });

            // define translation maps you want to use on startup
            $translateProvider.preferredLanguage('ru');
            $translateProvider.useSanitizeValueStrategy(null);

            $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

        }
    ]);