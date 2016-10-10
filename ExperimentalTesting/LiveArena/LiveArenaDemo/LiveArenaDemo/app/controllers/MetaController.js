var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var MetaController = (function () {
            function MetaController(metaService, $scope, $rootScope) {
                $rootScope.metaService = metaService;
                $rootScope.metaService.createTag(this.siteName, this.description);
            }
            MetaController.$inject = ["app.services.MetaService", "$scope", "$rootScope"];
            return MetaController;
        }());
        controllers.MetaController = MetaController;
        angular.module("ShareDemo").controller("app.controllers.MetaController", MetaController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=MetaController.js.map