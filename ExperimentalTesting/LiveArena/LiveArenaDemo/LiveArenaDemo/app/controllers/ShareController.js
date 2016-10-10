var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var ShareController = (function () {
            function ShareController(sharingService) {
                this.sharingService = sharingService;
                this.getShareSites();
            }
            ShareController.prototype.getShareSites = function () {
                this.shareSiteList = this.sharingService.getShareSites(); // Reference .shareSiteList to get the collection
            };
            //Inject the service!
            ShareController.$inject = ["app.services.ShareService"];
            return ShareController;
        })();
        controllers.ShareController = ShareController;
        angular.module("ShareDemo").controller("app.controllers.ShareController", ShareController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=ShareController.js.map