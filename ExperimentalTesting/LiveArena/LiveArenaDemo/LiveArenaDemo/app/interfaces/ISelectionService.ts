module app.interfaces {
    
    // an interface that describes the framework of a service fetching collective data of selection-items. 
    export interface ISelectionService {
        selectionItems: ISelectionItem[];       // selectionItems: an array containing selection-items.

        getSelectionItems(): ISelectionItem[];  // getSelectionItems: a function to fetch the array of selection-items.
    }
}