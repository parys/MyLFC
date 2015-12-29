var LandingPageController = function ($scope, SessionService) {
    $scope.userId = function() {
        return SessionService.getUserId();
    };

    $scope.navbarProperties = {
        isCollapsed: true
    };

    $scope.loggedIn = function () {
        return SessionService.getToken() !== undefined;
    }
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
LandingPageController.$inject = ['$scope', 'SessionService'];