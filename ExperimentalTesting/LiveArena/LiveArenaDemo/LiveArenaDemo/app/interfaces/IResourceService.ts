module app.interfaces {
    
    // An Interface describing the resource fetching/managing service for the selection-items.
    export interface IResourceService {
        selectionItems: ISelectItem[];               // An Array containing selection-items.

        getSelectionItems(): ISelectItem[];          // A function to fetch the array of selection-items.
        getSelectionItem(id: number): ISelectItem;   // A function to fetch a specific selection-item in the selection-item array. 
    }
}