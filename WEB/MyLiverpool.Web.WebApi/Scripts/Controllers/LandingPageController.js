var LandingPageController = function ($scope, $state, Authentication, RouteFilter, AccountFactory, $location, UsersFactory, $interval) {
    $scope.unreadPmCount = 0;

    $scope.userId = function () {
        return Authentication.getUserId();
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };

    function getUnreadPmCount() {
        if (!$scope.loggedIn) {
            return;
        }
        UsersFactory.getUnreadPmCount().
            then(function(response) {
                    if (response) {
                        $scope.unreadPmCount = response;
                    }
                },
                function(response) {
                });
    };

    $interval(getUnreadPmCount, 30000);

    $scope.loggedIn = function() {
        return Authentication.exists();
    };

    $scope.canAccess = function(route) {
        return RouteFilter.canAccess(route);
    }

    $scope.logout = function() {
        Authentication.logout();
        //$state.go('home');
    }

    $scope.emailUnique = function (email) {
        return AccountFactory.isEmailUnique(email);
    }

    $scope.userNameUnique = function (userName) {
        return AccountFactory.isUserNameUnique(userName);
    }

    $scope.getReturnUrl = function () {
      //  console.log($location.url());
        return $location.url();
    }
    
    $scope.isNewsmaker = function () {
     //   console.log('isNewsmaker landing ');
        return Authentication.isNewsmaker();
    }

    $scope.isEditor = function () {
    //    console.log('isEditor landing');
        return Authentication.isEditor();
    }

    $scope.isMainModerator = function () {
    //    console.log('isModerator landing');
        return Authentication.isMainModerator();
    }

    $scope.isModerator = function () {
    //    console.log('isModerator landing');
        return Authentication.isModerator();
    }

    $scope.isAuthor = function () {
        //    console.log('isModerator landing');
        return Authentication.isAuthor();
    }

    $scope.isAdmin = function () {
        //    console.log('isModerator landing');
        return Authentication.isAdmin();
    }
}

LandingPageController.$inject = ['$scope', '$state', 'Authentication', 'RouteFilter', 'AccountFactory', '$location', 'UsersFactory', '$interval'];