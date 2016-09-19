module app {

    export class Routes {
        // Class that manages all the routing
        static $inject = ["$routeProvider"];                                                        // dependency inject for $routeProvider.                              
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "app.controllers.ShareController", templateUrl: "/app/views/Share.html", controllerAs: "ShareController" });     // Add a New route with a New controller.
            $routeProvider.otherwise({ redirectTo: "/home" });                                      // Add a default case for the $routeProvider.
        }
    }
}