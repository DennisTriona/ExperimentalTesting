var app;
(function (app) {
    var directives;
    (function (directives) {
        "use strict";
        //Import the controller you use
        var ShareController = app.controllers.ShareController;
        //The directives second parameter is the instancing function.
        angular.module("ShareDemo").directive("shareButtons", function () { return ({
            restrict: 'E',
            templateUrl: "/app/views/Share.html",
            controller: ShareController,
            controllerAs: "ShareController"
        }); });
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
//# sourceMappingURL=ShareDirective.js.map