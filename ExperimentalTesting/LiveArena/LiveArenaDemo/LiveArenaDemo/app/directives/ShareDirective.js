var app;
(function (app) {
    "use strict";
    //function shareDirective(shareService : app.interfaces.IShareService) : ng.IDirective {
    //    let link: Function = (scope: any) => { };
    //    return {
    //        restrict: "EA",
    //        controller: app.controllers.ShareController,
    //        controllerAs: "ShareController",
    //        scope: {},
    //        replace: true,
    //        templateUrl: "/app/views/Share.html",
    //        link: link
    //    };
    //}
    var ShareDirective = (function () {
        function ShareDirective(_shareService) {
            this._shareService = _shareService;
        }
        ShareDirective.factory = function () {
            var directive = function (shareService) { return new ShareDirective(shareService); };
            directive.$inject = ["app.services.ShareService"];
            return directive;
        };
        return ShareDirective;
    }());
    app.ShareDirective = ShareDirective;
    //angular.module("ShareDemo").directive("app.directives.ShareDirective", shareDirective);
    angular.module("ShareDemo").directive("shareDirective", ShareDirective.factory());
})(app || (app = {}));
//# sourceMappingURL=ShareDirective.js.map