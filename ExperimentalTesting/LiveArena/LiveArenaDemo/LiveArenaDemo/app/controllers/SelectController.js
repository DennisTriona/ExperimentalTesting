var app;
(function (app) {
    var controllers;
    (function (controllers) {
        // A controller that manages the selection and naviagion between different selection-items
        // A Controller to manage the selections and navigation of selection-items. 
        var SelectController = (function () {
            function SelectController(selectionService) {
                this.resourceService = selectionService;
                this.resourceList = this.resourceService.getSelectionItems();
            }
            // Dependency injection of the ResrouceManagingService. 
            SelectController.$inject = ["app.services.ResourceService"];
            return SelectController;
        }());
        controllers.SelectController = SelectController;
        angular.module("ShareDemo").controller("app.controllers.SelectController", SelectController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=SelectController.js.map