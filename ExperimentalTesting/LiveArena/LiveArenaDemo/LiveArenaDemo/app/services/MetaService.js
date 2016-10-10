var app;
(function (app) {
    var services;
    (function (services) {
        var MetaService = (function () {
            function MetaService() {
            }
            Object.defineProperty(MetaService.prototype, "tag", {
                get: function () {
                    return this._tag;
                },
                set: function (value) {
                    this._tag = value;
                },
                enumerable: true,
                configurable: true
            });
            MetaService.prototype.createTag = function (siteName, description) {
                this._metaSiteName = siteName;
                this._metaDescription = description;
            };
            MetaService.prototype.metaDescription = function () {
                return this._metaDescription;
            };
            MetaService.prototype.metaSiteName = function () {
                return this._metaSiteName;
            };
            return MetaService;
        }());
        services.MetaService = MetaService;
        angular.module("ShareDemo").service("app.services.MetaService", MetaService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=MetaService.js.map