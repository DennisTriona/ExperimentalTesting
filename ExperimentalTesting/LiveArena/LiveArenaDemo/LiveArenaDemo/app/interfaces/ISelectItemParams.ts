module app.interfaces {

    export interface ISelectItemParams extends ng.route.IRouteParamsService {
        itemID: number;     // itemID: itemID to be used as routing-parameter
    }
}