var tree = function (RecursionHelper) {
    return {
        restrict: "E",
        scope: { comment: '=', deep: '=', authorId: '=' },
        templateUrl: 'uib/template/my/newsComment.html',
        controller: NewsCommentCtrl,
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
};

tree.$inject = ['RecursionHelper']