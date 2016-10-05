module app.interfaces {

    // An Interface describing an selection-item to mimic functionality of the Live-Arena site.     
    export interface ISelectItem {
        itemID: number;             // An unique identification of this selection-item.
        description: string;        // An description associated with this selection-item.
        date: string;               // A Date associated with the event of this selection-item. 
        publisher: string;          // A publisher associated with the event of this selection-item.             
        thumbnail_imgUrl: string;   // A direct-Url describing the directory of the thumbnail-image of the selection-item.
        display_imgUrl: string;     // A direct-url describing the directory of the image to display while the selection-item is selected. 
    }
}