var app;
(function (app) {
    // A class that handles app.modules, routing. 
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            // configure the routes for the views in the application. 
            $routeProvider.when("/home", { controller: "app.controllers.ImageController", templateUrl: "/app/views/ImageView.html", controllerAs: "imageService" });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        // inject the dependancy of the $routeProvider.
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    app.Routes = Routes;
})(app || (app = {}));
//# sourceMappingURL=app.route.js.map