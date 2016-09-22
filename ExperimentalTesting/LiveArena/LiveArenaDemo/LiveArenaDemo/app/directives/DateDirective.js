var app;
(function (app) {
    var directives;
    (function (directives) {
        //A directive that takes the ng's filter service to make a custom filter
        angular.module("ShareDemo").directive("dateNow", ["$filter", function ($filter) { return ({
                // The directives link function is filtering with date and returns dateNow
                link: function ($scope, $element, $attrs) {
                    $element.text($filter("date")(new Date(), $attrs.dateNow));
                }
            }); }
        ]);
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
//# sourceMappingURL=DateDirective.js.map