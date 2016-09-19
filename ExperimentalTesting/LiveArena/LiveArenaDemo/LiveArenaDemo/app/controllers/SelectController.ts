module app.controllers {

    class SelectController {
        resourceService: app.interfaces.IResourceService; // class-instance of the selectionService
        resourceList: app.interfaces.ISelectItem[];     // Array containing the available selection-items.
        
        static $inject = ["app.services.ResourceService"];
        constructor(selectionService: app.interfaces.IResourceService) {
            this.resourceService = selectionService;
            this.resourceList = this.resourceService.getSelectionItems();
        }
    }

    angular.module("ShareDemo").controller("app.controllers.SelectController", SelectController);
}