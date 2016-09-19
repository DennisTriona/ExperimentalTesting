var app;
(function (app) {
    var services;
    (function (services) {
        //Shareservice!
        var ShareService = (function () {
            function ShareService() {
            }
            ShareService.prototype.getShareSites = function () {
                var shareSites = [
                    { provider: "Facebook", imgUrl: "fa fa-5x fa-facebook-square" },
                    { provider: "Twitter", imgUrl: "fa fa-5x fa-twitter-square" }
                ];
                return shareSites;
            };
            return ShareService;
        }());
        services.ShareService = ShareService;
        angular.module("ShareDemo").service("app.services.ShareService", ShareService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=ShareService.js.map