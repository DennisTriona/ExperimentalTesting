module app.controllers {

    // A controller that manages the selection and naviagion between different selection-items
    // A Controller to manage the selections and navigation of selection-items. 
    export class SelectController {
        // A instance of the ResourceManaging-service. 
        resourceService: app.interfaces.IResourceService;
        // An Array containing all the fetched selection-items. 
        resourceList: app.interfaces.ISelectItem[];       
        
        // Dependency injection of the ResrouceManagingService. 
        static $inject = ["app.services.ResourceService"];
        constructor(selectionService: app.interfaces.IResourceService) {
            this.resourceService = selectionService;
            this.resourceList = this.resourceService.getSelectionItems();
        }
    }

    angular.module("ShareDemo").controller("app.controllers.SelectController", SelectController);
}