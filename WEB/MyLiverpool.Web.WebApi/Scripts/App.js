var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'ngCookies']);

App.controller('LandingPageController', LandingPageController);
App.controller('LoginController', LoginController);
App.controller('RegisterController', RegisterController);
App.controller('ValuesController', ValuesController);
App.controller('NewsController', NewsController);
App.controller('NewsItemController', NewsItemController);
App.controller('UserController', UserController);
App.controller('UsersController', UsersController);
App.controller('PmsController', PmsController);
App.controller('ForumController', ForumController);

App.service('SessionService', SessionService);

//App.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
App.factory('LoginFactory', LoginFactory);
App.factory('RegisterFactory', RegisterFactory);
App.factory('GetNewsItemsFactory', GetNewsItemsFactory);
App.factory('GetNewsItemFactory', GetNewsItemFactory);
App.factory('GetUserFactory', GetUserFactory);
App.factory('GetUsersFactory', GetUsersFactory);
App.factory('GetPmsFactory', GetPmsFactory);
App.factory('GetForumFactory', GetForumFactory);

var configFunction = function ($stateProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode({
        enabled: true,
        requireBase : false
    });

    $stateProvider
        .state('home', {
            url: '/', //?donunts
             
            views: {
                "containerMain": {
                    templateUrl: '/news/index',
                    controller: NewsController
                } //,
                //"containerTwo": {
                //    templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
                //},
                //"nestedView@stateOne": {
                //    templateUrl: '/routesDemo/four'
                //}
            }
        })
        .state('news', {
            url: '/news?page&categoryId',
            views: {
                 "containerMain": {
                    templateUrl: function(params) { return '/news/index?page=' + params.page + '&categoryId=' + params.categoryId },
                    controller: NewsController
                }
            }
        })
        .state('newsInfo', {
            url: '/newsInfo?id',
            views: {
                 "containerMain": {
                    templateUrl: function(params) { return '/news/info?id=' + params.id },
                    controller: NewsItemController
                }
            }
        })

        .state('userInfo', {
            url: '/userInfo?id',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/user/info?id=' + params.id },
                    controller: UserController
                }
            }
        })

        .state('users', {
            url: '/users?page',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/user/index?page=' + params.page },
                    controller: UsersController
                }
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
            url: '/pms?id',
            views: {
                "containerMain": {
                    templateUrl: function (params) { return '/User/Pms?id=' + params.id },
                    controller: PmsController
                }
            }
        })
        .state('register', {
            url: '/register?returnUrl',
            views: {
                "containerMain": {
                    templateUrl: '/Account/Register',
                    controller: RegisterController
                }
            }
        })
        .state('login', {
            url: '/login?returnUrl',
            views: {
                "containerMain": {
                    templateUrl: '/Account/Login',
                    controller: LoginController
                }
            }

        })
        .state('forum', {
            url: '/forum',
            views: {
                "containerMain": {
                    templateUrl: '/Forum/Index',
                    controller: ForumController
                }
            }

        });



    //$httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

App.config(configFunction);