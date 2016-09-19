module app.controllers {

    // A controller to manage the item-detail view.
    class ItemDetailController {
        resourceService: app.interfaces.IResourceService;
        item: app.interfaces.ISelectItem;

        static $inject = ["$routeParams", "app.services.ResourceService"]
        constructor(private $routeParams: app.interfaces.ISelectItemParams,
                    resourceService: app.services.ResourceService) {

            this.resourceService = resourceService;
            var id = $routeParams.itemID;
            this.item = this.resourceService.getSelectionItem(id);
        }
    }

    angular.module("ShareDemo").controller("app.controllers.ItemDetailController", ItemDetailController);
}