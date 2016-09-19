module app.controllers {

    // A controller that manages the selection and naviagion between different selection-items
    class SelectController {
        resourceService: app.interfaces.IResourceService;
        resourceList: app.interfaces.ISelectItem[];       
        
        static $inject = ["app.services.ResourceService"];
        constructor(selectionService: app.interfaces.IResourceService) {
            this.resourceService = selectionService;
            this.resourceList = this.resourceService.getSelectionItems();
        }
    }

    angular.module("ShareDemo").controller("app.controllers.SelectController", SelectController);
}