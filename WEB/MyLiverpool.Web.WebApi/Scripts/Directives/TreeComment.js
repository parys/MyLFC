var tree = function (RecursionHelper) {
    console.log('1234');
    return {
        restrict: "E",
        scope: { comment: '=', deep: '=' },
        template:
            '<div class="col-md-offset-{{deep}} comment row">' +
                '<div class=" col-md-12">' +
                    '<div class="col-md-2">{{comment.authorUserName}}</div>' +
                       '<div class="col-md-10">' +
                            '{{comment.message}}' +
                       '</div> ' +
                '</div>' +
            '</div>' +
            '<div ng-repeat="child in comment.children">' +
                        '<tree comment="child" deep="deep+1"></tree>' +
            '</div>',

         
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