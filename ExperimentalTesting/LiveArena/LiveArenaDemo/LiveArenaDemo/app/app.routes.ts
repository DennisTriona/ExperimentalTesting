﻿module app {
    export class Routes {
        
        static $inject = ['$routeProvider'];                                                    // dependency inject for $routeProvider. 
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", { controller: "", templateUrl: "", controllerAs: "" }) // Add a New route with a New controller.
            $routeProvider.otherwise({ redirectTo: "/home" });                                  // Add a default case for the $routeProvider. 
        }
    }
}