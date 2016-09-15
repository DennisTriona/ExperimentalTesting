var app;
(function (app) {
    var service;
    (function (service) {
        var SharingService = (function () {
            function SharingService() {
            }
            SharingService.prototype.getShareSites = function () {
                var shareSites = [
                    { provider: "facebook", img_url: "fa fa-5x fa-facebook-square" },
                    { provider: "twitter", img_url: "fa fa-5x fa-twitter-square" },
                    { provider: "google", img_url: "fa fa-5x fa-google-plus-square" },
                    { provider: "reddit", img_url: "fa fa-5x fa-reddit-square" },
                    { provider: "linkedin", img_url: "fa fa-5x fa-linkedin-square" },
                    { provider: "pinterest", img_url: "fa fa-5x fa-pinterest-square" },
                    { provider: "tumblr", img_url: "fa fa-5x fa-tumblr-square" },
                    { provider: "ok", img_url: "fa fa-5x fa-odnoklassniki-square" }
                ];
                return shareSites;
            };
            return SharingService;
        })();
        service.SharingService = SharingService;
        angular.module("app").service("app.services.SharingService", SharingService);
    })(service = app.service || (app.service = {}));
})(app || (app = {}));
//# sourceMappingURL=SharingService.js.map