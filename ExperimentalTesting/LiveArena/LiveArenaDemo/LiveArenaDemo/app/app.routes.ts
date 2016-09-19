module app {

    export class Routes {
        // Class that manages all the routing
        static $inject = ["$routeProvider"];                           
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "app.controllers.ShareController", templateUrl: "/app/views/Share.html", controllerAs: "ShareController" });     // Add a New route with a New controller.
            $routeProvider.when("/ItemDetail/:itemID", {
                controller: "app.controllers.ItemDetailController",
                templateUrl: "app.views...", /*TODO: Add path for view*/
                controllerAs: "DetailCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/home" }); //Default catch all
        }
    }
}