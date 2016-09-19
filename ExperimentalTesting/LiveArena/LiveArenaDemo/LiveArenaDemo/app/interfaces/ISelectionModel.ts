module app.interfaces {
    
    // an interface that describes the framework of a service fetching collective data of selection-items. 
    export interface ISelectionModel {
        selectionItems: ISelectionItem[];               // selectionItems: an array containing selection-items.

        getSelectionItems(): ISelectionItem[];          // getSelectionItems: a function to fetch the array of selection-items.
        //getSelectionItem(id: number): ISelectionItem;   // getSelectionItem: a function that returns the selection-item of a specified id. 
    }
}