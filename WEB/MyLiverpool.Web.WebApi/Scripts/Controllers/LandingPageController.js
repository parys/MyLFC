var LandingPageController = function ($scope, $state, Authentication, RouteFilter, AccountFactory, $location) { //SessionService,
    $scope.userId = function() {
        return Authentication.getUserId();
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };
    

    $scope.loggedIn = function () {
        return Authentication.exists();
    }


    $scope.canAccess = function(route) 
             { 
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
     //   console.log('isEditor landing');
        return Authentication.isEditor();
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

LandingPageController.$inject = ['$scope', '$state', 'Authentication', 'RouteFilter', 'AccountFactory', '$location']; //'SessionService',