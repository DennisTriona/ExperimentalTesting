module app.controllers {

    class SelectionController {
        selectionService: app.interfaces.ISelectionModel; // class-instance of the selectionService
        selectionList: app.interfaces.ISelectionItem[];     // Array containing the available selection-items.
        
        static $inject = ["app.services.SelectionService"];
        constructor(selectionService: app.interfaces.ISelectionModel) {
            this.selectionService = selectionService;
        }

        getSelectionItems() {
            this.selectionList = this.selectionService.getSelectionItems();
        }
    }

    angular.module("ShareDemo").controller("app.controllers.SelectionController", SelectionController);
}