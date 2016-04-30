'use strict';
angular.module('liverpoolApp',
    [
        'ui.router',
        'ui.bootstrap',
        'ngCookies',
        'pascalprecht.translate',
        'ghiscoding.validation',
        'ui.router.title',
        'angular-loading-bar',
        'autocomplete',
        'ngFileUpload',
        'ncy-angular-breadcrumb',
        'filter',
        'forum.config',
        'images.config',
        'news.config',
        'newsCategory.config',
        'newsComment.config',
        'pms.config',
        'roleGroup.config',
        'users.config'
    ])
    .run(function(Authentication, Application, $rootScope, $location, uibPaginationConfig, $state, $stateParams, $window) {
        //$rootScope.roles = "";
        Authentication.requestUser();

        //    .then(function () {
        //     Application.makeReady();
        // });//todo
        $rootScope.alerts = [];

        $rootScope.closeAlert = function(index) {
            $rootScope.alerts.splice(index, 1);
        };

        $rootScope.$on('$stateChangeStart', function(scope, next, current) {
            //console.log('stateChange ');
            //console.log(next);

            //if (next.name == 'login') {

            //}
            // if ($location.path() === '/loading') return;
            //todo edit to use STATE

            if (!Application.isReady()) {
                //     $location.path('loading');
                console.log('not ready');
            }

            //RouteFilter.run($location.path());

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        });

        $rootScope.$on("$stateChangeSuccess", function(event, currentState, previousState) {
           // console.log('scroll to top');
            $window.scrollTo(0, 0); //todo think about it
        });

        uibPaginationConfig.itemsPerPage = 15;
        uibPaginationConfig.directionLinks = false;
        uibPaginationConfig.maxSize = 5;
        uibPaginationConfig.rotate = false;


        $rootScope.isSelf = function(userId) {
            return Authentication.getUserId() == userId;
        }

        $rootScope.isNewsmaker = function() {
            return Authentication.isNewsmaker();
        }

        $rootScope.isEditor = function() {
            return Authentication.isEditor();
        }

        $rootScope.isMainModerator = function() {
            return Authentication.isMainModerator();
        }

        $rootScope.isModerator = function() {
            return Authentication.isModerator();
        }

        $rootScope.isAuthor = function() {
            return Authentication.isAuthor();
        }

        $rootScope.isAdmin = function() {
            return Authentication.isAdmin();
        }

        $rootScope.isAdminAssistant = function() {
            return Authentication.isAdminAssistant();
        }

        $rootScope.isUserAuthor = function (userId, newsUserId) {
            return userId == newsUserId;
        }
    });