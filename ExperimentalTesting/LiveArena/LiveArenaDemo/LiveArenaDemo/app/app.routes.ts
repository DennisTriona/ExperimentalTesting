module app {

    export class Routes {
        // Class that manages all the routing
        static $inject = ["$routeProvider"];                           
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", {
                controller: "",
                templateUrl: "",
                controllerAs: ""
            });
            $routeProvider.when("/ItemDetail/:itemID", {
                controller: "app.controllers.ItemDetailController",
                templateUrl: "app.views...", /*TODO: Add path for view*/
                controllerAs: "DetailCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}