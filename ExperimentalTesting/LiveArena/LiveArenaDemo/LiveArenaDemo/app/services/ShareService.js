var app;
(function (app) {
    var services;
    (function (services) {
        //Shareservice!
        var ShareService = (function () {
            function ShareService() {
            }
            // Collection of share sites, their name and extra
            ShareService.prototype.getShareSites = function () {
                var shareSites = [
                    { provider: "pinterest", imgUrl: "fa-pinterest-square", color: "color-pinterest-red" },
                    { provider: "google", imgUrl: "fa-google-plus-square", color: "color-googleplus-red" },
                    { provider: "linkedin", imgUrl: "fa-linkedin-square", color: "color-linkedin-blue" },
                    { provider: "twitter", imgUrl: "fa-twitter-square", color: "color-twitter-blue" },
                    { provider: "facebook", imgUrl: "fa-facebook-square", color: "color-facebook-blue" }
                ];
                return shareSites;
            };
            return ShareService;
        })();
        services.ShareService = ShareService;
        angular.module("ShareDemo").service("app.services.ShareService", ShareService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=ShareService.js.map