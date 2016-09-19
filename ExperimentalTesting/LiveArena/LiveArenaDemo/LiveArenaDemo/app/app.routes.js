var app;
(function (app) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", { controller: "app.controllers.ShareController", templateUrl: "/app/views/Share.html", controllerAs: "ShareController" }); // Add a New route with a New controller.
            $routeProvider.otherwise({ redirectTo: "/home" }); // Add a default case for the $routeProvider.
        };
        // Class that manages all the routing
        Routes.$inject = ["$routeProvider"]; // dependency inject for $routeProvider.                              
        return Routes;
    }());
    app.Routes = Routes;
})(app || (app = {}));
//# sourceMappingURL=app.routes.js.map