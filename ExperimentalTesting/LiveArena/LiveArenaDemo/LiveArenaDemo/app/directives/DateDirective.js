var app;
(function (app) {
    angular.module("ShareDemo").directive("dateNow", ["$filter", function ($filter) { return ({
            link: function ($scope, $element, $attrs) {
                $element.text($filter("date")(new Date(), $attrs.dateNow));
            }
        }); }
    ]);
})(app || (app = {}));
//# sourceMappingURL=DateDirective.js.map