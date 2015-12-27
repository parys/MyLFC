var LandingPageController = function ($scope, SessionService) {
    $scope.models = {
        helloAngular: 'I work! 111'
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