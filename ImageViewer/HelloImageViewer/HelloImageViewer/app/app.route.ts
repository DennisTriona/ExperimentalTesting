module app {
    // A class that handles app.modules, routing. 
    export class Routes {
        // inject the dependancy of the $routeProvider.
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            // configure the routes for the views in the application. 
            $routeProvider.when("/home", { controller: "app.controllers.ImageController", templateUrl: "/app/views/ImageView.html", controllerAs: "imageService" });
            $routeProvider.when("/imageShare", { controller: "app.controllers.ImageSharingController", templateUrl: "app/views/ImageView-ImageShare.html", controllerAs: "imageService" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }       
    }
}