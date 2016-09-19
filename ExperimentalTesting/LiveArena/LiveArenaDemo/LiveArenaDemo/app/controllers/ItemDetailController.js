var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var ItemDetailController = (function () {
            function ItemDetailController($routeParams, resourceService) {
                this.$routeParams = $routeParams;
                this.resourceService = resourceService;
                var id = $routeParams.itemID;
                this.item = this.resourceService.getSelectionItem(id);
            }
            ItemDetailController.$inject = ["$routeParams", "app.services.ResourceService"];
            return ItemDetailController;
        }());
        angular.module("ShareDemo").controller("app.controllers.ItemDetailController", ItemDetailController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=ItemDetailController.js.map