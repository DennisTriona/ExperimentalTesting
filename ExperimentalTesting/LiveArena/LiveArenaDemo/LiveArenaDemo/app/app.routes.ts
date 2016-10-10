module app {

    export class Routes {
        // Class that manages all the routing
        static $inject = ["$routeProvider"];                           
        static configureRoutes($routeProvider: ng.route.IRouteProvider, $locationProvider : ng.ILocationProvider) {
            // Add a New route with a New controller.
            $routeProvider.when("/ItemDetail/:itemID", {
                controller: "app.controllers.ItemDetailController",
                templateUrl: "app/views/ItemDetails.html",
                controllerAs: "DetailCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/home" }); //Default catch all

            // For better routing but does not really work well on our current set up
            // Must install IIS rewrite extension and such so don't bother
            //if (window.history && window.history.pushState) {
            //    $locationProvider.html5Mode({ enabled: true, requireBase: false });
            //}
        }
    }
}