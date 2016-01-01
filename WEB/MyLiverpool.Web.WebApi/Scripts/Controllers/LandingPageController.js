var LandingPageController = function ($scope,  Authentication, RouteFilter) { //SessionService,
    //$scope.userId = function() {
    //    return SessionService.getUserId();
    //};

    $scope.navbarProperties = {
        isCollapsed: true
    };

    
    $scope.loggedIn = function () {
     //   console.log('loggedIn = ' + Authentication.getUser());
        return (Authentication.getUser());
        //return SessionService.getToken() !== undefined;
    }


    $scope.canAccess = function(route) 
             { 
                     return RouteFilter.canAccess(route); 
                 } 

    $scope.logout = function() {
        Authentication.logout();
    }
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope', 'Authentication', 'RouteFilter']; //'SessionService',