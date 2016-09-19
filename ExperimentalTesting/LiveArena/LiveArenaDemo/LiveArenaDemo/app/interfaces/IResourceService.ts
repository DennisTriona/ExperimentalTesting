module app.interfaces {
    
    // an interface that describes the framework of a service fetching collective data of selection-items. 
    export interface IResourceService {
        selectionItems: ISelectItem[];               // selectionItems: an array containing selection-items.

        getSelectionItems(): ISelectItem[];          // getSelectionItems: a function to fetch the array of selection-items.
        getSelectionItem(id: number): ISelectItem;   // getSelectionItem: a function that returns the selection-item of a specified id. 
    }
}