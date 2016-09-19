var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var SelectionController = (function () {
            function SelectionController(selectionService) {
                this.selectionService = selectionService;
            }
            SelectionController.prototype.getSelectionItems = function () {
                this.selectionList = this.selectionService.getSelectionItems();
            };
            SelectionController.$inject = ["app.services.SelectionService"];
            return SelectionController;
        }());
        angular.module("ShareDemo").controller("app.controllers.SelectionController", SelectionController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=SelectionController.js.map