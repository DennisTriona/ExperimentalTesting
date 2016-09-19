var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var SelectController = (function () {
            function SelectController(selectionService) {
                this.selectionService = selectionService;
                this.selectionList = this.selectionService.getSelectionItems();
            }
            SelectController.$inject = ["app.services.SelectionService"];
            return SelectController;
        })();
        angular.module("ShareDemo").controller("app.controllers.SelectionController", SelectController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=SelectItemController.js.map