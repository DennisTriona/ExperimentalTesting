var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var SelectController = (function () {
            function SelectController(selectionService) {
                this.resourceService = selectionService;
                this.resourceList = this.resourceService.getSelectionItems();
            }
            SelectController.$inject = ["app.services.ResourceService"];
            return SelectController;
        })();
        angular.module("ShareDemo").controller("app.controllers.SelectController", SelectController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=SelectController.js.map