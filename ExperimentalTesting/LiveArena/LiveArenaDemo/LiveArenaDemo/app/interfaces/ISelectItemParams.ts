module app.interfaces {

    // An Interface to describe the parameters needed for ItemDetail-routing. 
    export interface ISelectItemParams extends ng.route.IRouteParamsService {
        itemID: number;     // An identification of an selection-item. 
    }
}