module app.interfaces {

    // An interface describing an selection-item to be used in the LA-Share demo. 
    export interface ISelectionItem {
        id: number;             // id: to distinguish different selection-items (used internally for routing)
        description: string;    // description: description of the item
        date: string;             // date: date of time the item will be displayed. 
        imgUrl: string;         // imgUrl: a url for the image. 
    }
}