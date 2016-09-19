module app.services {

    export class SelectionService implements app.interfaces.ISelectionService {
        selectionItems: app.interfaces.ISelectionItem[];    // selectionItems: array containing a collection of slectionItems. 

        getSelectionItems(): app.interfaces.ISelectionItem[] {
            var selectionItems: app.interfaces.ISelectionItem[] = [
                { id: 1, description: "a description of the selection-item", date: "09-19-2016", imgUrl: "http://url.something" }
            ];
            return selectionItems;
        }
    }
    angular.module("ShareDemo").service("app.services.SelectionService", SelectionService);
}