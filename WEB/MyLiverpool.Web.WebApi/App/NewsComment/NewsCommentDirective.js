'use strict';
angular.module('newsComment.directive', [])
    .directive('tree', [
        'RecursionHelper',
        function(RecursionHelper) {
            return {
                restrict: "E",
                scope: { comment: '=', deep: '=', authorId: '=' },
                templateUrl: '/app/newsComment/views/newsComment',
                controller: 'NewsCommentCtrl',
                controllerAs: 'vm',
                transclude: true,
                compile: function(element) {
                    return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {
                        // Define your normal link function here.
                        // Alternative: instead of passing a function,
                        // you can also pass an object with 
                        // a 'pre'- and 'post'-link function.
                    });
                }
            };
        }
    ]);