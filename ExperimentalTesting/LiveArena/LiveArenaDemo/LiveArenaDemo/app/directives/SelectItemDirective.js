var app;
(function (app) {
    var directives;
    (function (directives) {
        'use strict';
        var SelectController = app.controllers.SelectController;
        angular.module("ShareDemo").directive("itemSelection", function () { return ({
            restrict: 'E',
            templateUrl: "/app/views/SelectionList.html",
            controller: SelectController,
            controllerAs: "selectCtrl"
        }); });
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
//# sourceMappingURL=SelectItemDirective.js.map