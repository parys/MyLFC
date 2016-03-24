'use strict';
var app = angular.module('liverpoolApp',
[
    'ui.router',
    'ui.bootstrap',
    'ngCookies',
    'pascalprecht.translate',
    'ghiscoding.validation',
    'ui.router.title',
    'angular-loading-bar',
    'autocomplete',
    'ngFileUpload'
]);

//var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $translateProvider) {

//    $locationProvider.hashPrefix('!').html5Mode({
//        enabled: true,
//        requireBase: false
//    });

//    $stateProvider
//        .state('home', {
//            url: '/', //?donunts

//            views: {
//                "containerMain": {
//                    templateUrl: '/news/list',
//                    controller: NewsController
//                } //,
//                //"containerTwo": {
//                //    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
//                //},
//                //"nestedView@stateOne": {
//                //    templateUrl: '/routesDemo/four'
//                //}
//            },
//            resolve: {
//                // Constant title
//                $title: function() { return 'Главная'; }
//            }
//        })
//        .state('rules', {
//            url: '/rules',
//            views: {
//                "containerMain": {
//                    templateUrl: '/home/rules',
//                    controller: leftContainerCtrl //todo change
//                }
//            },
//            resolve: {
//                $title: function() { return 'Правила'; }
//            }
//        })
//        .state('news', {
//            url: '/news?page&categoryId',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/news/list?page=' + params.page + '&categoryId=' + params.categoryId },
//                    controller: NewsController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Новости'; }
//            }
//        })
//        .state('newsInfo', {
//            url: '/newsInfo?id',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/news/info?id=' + params.id },
//                    controller: NewsItemController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Название новости'; } //todo
//            }
//        })
//        .state('newsEdit', {
//            url: '/newsEdit?id',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/news/Edit?id=' + params.id },
//                    controller: NewsEditCtrl
//                }
//            },
//            resolve: {
//                $title: function() { return 'Редактирование новости'; }
//            }
//        })
//        .state('newsCategories', {
//            url: '/newsCategories',
//            views: {
//                "containerMain": {
//                    templateUrl: '/news/Categories',
//                    controller: NewsCategoriesCtrl
//                }
//            },
//            resolve: {
//                $title: function() { return 'Категории новостей'; }
//            }
//        })
//        .state('userInfo', {
//            url: '/userInfo?id',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/user/info?id=' + params.id },
//                    controller: UserController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Профиль '; } //todo
//            }
//        })
//        .state('users', {
//            url: '/users?page',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/user/list?page=' + params.page },
//                    controller: UsersController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Пользователи'; }
//            }
//        })
//        .state('images', {
//            url: '/images?path',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/images/index?path=' + params.path },
//                    controller: ImagesCtrl
//                }
//            },
//            resolve: {
//                $title: function() { return 'Изображения '; } //todo
//            }
//        })
//        //.state('sign-out', {
//        //      url: '/signout',
//        //      controller: function($state, User) {
//        //          User.signOut();
//        //          $state.go('home');
//        //      },
//        //      data: {
//        //          requireLogin: false,
//        //      }
//        //.state('stateTwo', {
//        //    url: '/stateTwo',
//        //    views: {
//        //        "containerMain": {
//        //            templateUrl: '/routesDemo/one'
//        //        },
//        //        "containerTwo": {
//        //            templateUrl: '/routesDemo/three'
//        //        }
//        //    }
//        //})
//        .state('pms', {
//            url: '/pms', //'?id',
//            views: {
//                "containerMain": {
//                    templateUrl: '/User/Pms', //function (params) { return '/User/Pms?id=' + params.id },
//                    controller: PmsController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Личные сообщения'; }
//            }
//        })
//        .state('pm', {
//            url: '/pm?id',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/User/Pm?id=' + params.id },
//                    controller: PmController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Чтение сообщения'; }
//            }
//        })
//        .state('wpm', {
//            url: '/wpm',
//            views: {
//                "containerMain": {
//                    templateUrl: '/User/WritePm',
//                    controller: PmWriteCtrl
//                }
//            },
//            params: {
//                title: null,
//                userName: null
//            },
//            resolve: {
//                $title: function() { return 'Написание сообщения'; }
//            }
//        })
//        .state('register', {
//            url: '/register?returnUrl',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Account/Register',
//                    controller: RegisterController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Регистрация'; }
//            }
//        })
//        .state('login', {
//            url: '/login?returnUrl',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/Account/Login?returnUrl=' + params.returnUrl },
//                    controller: LoginController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Страница входа'; }
//            }

//        })
//        .state('forum', {
//            url: '/forum',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Forum/Index',
//                    controller: ForumController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Форум'; }
//            }
//        })
//        .state('subsection', {
//            url: '/subsection?id&page',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/Forum/Subsection?id=' + params.id + '&page=' + params.page },
//                    controller: ForumSubsectionController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Раздел'; } //todo
//            }
//        })
//        .state('theme', {
//            url: '/theme?id&page',
//            views: {
//                "containerMain": {
//                    templateUrl: function(params) { return '/Forum/Theme?id=' + params.id + '&page=' + params.page },
//                    controller: ForumThemeController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Тема'; } //todo
//            }
//        })
//        .state('confirmed', {
//            url: '/confirmed',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Account/ConfirmEmail'
//                }
//            },
//            resolve: {
//                $title: function() { return 'Ваш аккаунт подтвержден'; }
//            }
//        }).state('unconfirmed', {
//            url: '/unconfirmed',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Account/UnconfirmEmail',
//                    controller: LoginController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Ваш аккаунт не подтвержден'; }
//            }
//        }).state('forgotPassword', {
//            url: '/forgotPassword',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Account/forgotPassword',
//                    controller: LoginController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Забыли пароль?'; }
//            }
//        }).state('emailSent', {
//            url: '/emailSent',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Account/emailSent'
//                }
//            },
//            resolve: {
//                $title: function() { return 'Забыли пароль?'; }
//            }
//        }).state('resetPassword', {
//            url: '/resetPassword?code',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Account/resetPassword',
//                    controller: LoginController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Восстановление пароля'; }
//            }
//        }).state('changePassword', {
//            url: '/changePassword',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Account/changePassword',
//                    controller: LoginController
//                }
//            },
//            resolve: {
//                $title: function() { return 'Изменение пароля'; }
//            }
//        }).state('passwordChanged', {
//            url: '/passwordChanged',
//            views: {
//                "containerMain": {
//                    templateUrl: '/Account/passwordChanged'
//                }
//            },
//            resolve: {
//                $title: function() { return 'Пароль успешно изменен'; }
//            }
//        });

//    $translateProvider.useStaticFilesLoader({
//        prefix: 'Scripts/angular-validation/locales/',
//        suffix: '.json'
//    });

//    // define translation maps you want to use on startup
//    $translateProvider.preferredLanguage('ru');

//    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');

//}
//configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$translateProvider'];

//app.config(configFunction);

//app.run(function (Authentication, Application, $rootScope, $location, uibPaginationConfig, $state, $stateParams, $window) {
//    //$rootScope.roles = "";
//    Authentication.requestUser();

//    //    .then(function () {
//    //     Application.makeReady();
//    // });//todo
//    $rootScope.alerts = [];

//    $rootScope.closeAlert = function (index) {
//        $rootScope.alerts.splice(index, 1);
//    };



//    $rootScope.$on('$stateChangeStart', function (scope, next, current) {
//        //console.log('stateChange ');
//        //console.log(next);

//        //if (next.name == 'login') {

//        //}
//        // if ($location.path() === '/loading') return;
//        //todo edit to use STATE

//        if (!Application.isReady()) {
//            //     $location.path('loading');
//            console.log('not ready');
//        }

//        //RouteFilter.run($location.path());

//        $rootScope.$state = $state;
//        $rootScope.$stateParams = $stateParams;
//    });

//    $rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
//        console.log('scroll to top');
//        $window.scrollTo(0, 0); //todo think about it
//    });

//    uibPaginationConfig.itemsPerPage = 15;
//    uibPaginationConfig.directionLinks = false;
//    uibPaginationConfig.maxSize = 5;
//    uibPaginationConfig.rotate = false;
//});